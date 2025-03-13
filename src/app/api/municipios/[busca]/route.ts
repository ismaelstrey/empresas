import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const municipio = searchParams.get("municipio")?.toString() || undefined;
    // Construindo a query dinâmica
    console.log(municipio)
    const filtros: any = {};
    if (municipio) filtros.municipio = municipio;
 




    try {
        const municipios = await prisma.municipio.findMany(
            {
                skip: 0,
                take: 30,
                where:{
                   ...filtros
                }
            
            }

        );
        return NextResponse.json(municipios);
    } catch (error) {
        console.error("Erro ao buscar municipios:", error);
        return NextResponse.json({ error: "Erro ao buscar municipios" }, { status: 500 });
    }
}