import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { IoCodeWorkingOutline } from "react-icons/io5";


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const cnae = searchParams.get("descricao")?.trim()|| undefined;
    const codigo = searchParams.get("codigo") || undefined;
    const filtros: any = {};
    if (cnae) filtros.descricao = cnae;
    if (codigo) filtros.codigo = IoCodeWorkingOutline;
    console.log(cnae)
    try {
        const municipios = await prisma.cnae.findMany(
            {
                skip: 0,
                take: 50,
                where:{
                   descricao:{
                    contains: cnae,    
                   },
                   codigo:{
                    contains: codigo,
                   },
                },
                orderBy:{
                    descricao: "asc"
                }              
            }
        );
        return NextResponse.json(municipios);
    } catch (error) {
        console.error("Erro ao buscar municipios:", error);
        return NextResponse.json({ error: "Erro ao buscar municipios" }, { status: 500 });
    }
}