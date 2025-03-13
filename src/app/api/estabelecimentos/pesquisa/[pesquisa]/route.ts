import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface FiltroEstabelecimento {
    situacao_cadastral?: string;
    municipio?: string;
    cep?: string;
    bairro?: string;
    nome?: {
        contains: string;
        mode: 'insensitive';
    };
}

const DEFAULT_LIMIT = 30;
const DEFAULT_PAGE = 1;

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        
        // Paginação
        const page = Math.max(1, Number(searchParams.get('page')) || DEFAULT_PAGE);
        const limit = Math.min(100, Math.max(1, Number(searchParams.get('limit')) || DEFAULT_LIMIT));
        const skip = (page - 1) * limit;

        // Parâmetros de busca com validação e normalização
        const filtros: FiltroEstabelecimento = {};
        
        const municipio = searchParams.get("municipio")?.trim();
        const bairro = searchParams.get("bairro")?.trim();
        const nome = searchParams.get("nome")?.trim();
        const situacao_cadastral = searchParams.get("situacao_cadastral")?.trim();
        const cep = searchParams.get("cep")?.trim();

        // Aplicando filtros apenas se existirem valores válidos
        if (situacao_cadastral) filtros.situacao_cadastral = situacao_cadastral;
        if (municipio) filtros.municipio = municipio;
        if (cep?.match(/^\d{8}$/)) filtros.cep = cep;
        if (bairro) filtros.bairro = bairro.toUpperCase();
        if (nome) {
            filtros.nome = {
                contains: nome.toUpperCase(),
                mode: 'insensitive'
            };
        }

        // Busca no banco de dados
        const [estabelecimentos, total] = await Promise.all([
            prisma.estabelecimento.findMany({
                skip,
                take: limit,
                where: filtros,
                orderBy: {
                    nome_fantasia: 'asc'
                }
            }),
            prisma.estabelecimento.count({
                where: filtros
            })
        ]);

        // Retorno com metadados
        return NextResponse.json({
            data: estabelecimentos,
            metadata: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
                hasMore: skip + estabelecimentos.length < total
            }
        });

    } catch (error) {
        console.error("Erro ao buscar estabelecimentos:", error);
        
        if (error instanceof Error) {
            return NextResponse.json(
                { error: "Erro ao buscar estabelecimentos", message: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}