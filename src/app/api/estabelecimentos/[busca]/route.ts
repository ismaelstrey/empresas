import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const searchParams = await request.nextUrl.searchParams;
    const params = {
        municipio: searchParams.get("municipio"),
        bairro: searchParams.get("bairro"),
        nome: searchParams.get("nome"),
        situacao_cadastral: searchParams.get("situacao_cadastral"),
        cep: await searchParams.get("cep") 
    };
    console.log(params)
    const municipio = searchParams.get("municipio")?.toString() || undefined;
    const bairro = searchParams.get("bairro")?.toUpperCase() || undefined;
    const nome = searchParams.get("nome")?.toUpperCase() || undefined;
    const situacao_cadastral = searchParams.get("situacao_cadastral") || undefined;
    const cep = searchParams.get("cep") || undefined;    // Exemplo: filtro por nome do estabelecimento
console.log(searchParams)
    // Construindo a query dinâmica
    const filtros: any = {};
    if (situacao_cadastral) filtros.situacao_cadastral = situacao_cadastral;
    if (municipio) filtros.municipio = municipio;
    if (cep) filtros.cep = cep;
    if (bairro) filtros.bairro = bairro.toUpperCase();
    if (nome) filtros.nome = { contains: nome, mode: "insensitive" };

console.log({...filtros})

    try {
        const estabelecimentos = await prisma.estabelecimento.findMany(
            {
                skip: 0,
                take: 30,
                where: {
                   ...filtros
                },
            }

        );
        return NextResponse.json(estabelecimentos);
    } catch (error) {
        console.error("Erro ao buscar estabelecimentos:", error);
        return NextResponse.json({ error: "Erro ao buscar estabelecimentos" }, { status: 500 });
    }
}