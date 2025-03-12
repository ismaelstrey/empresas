import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {

    const estabelecimentos = await prisma.estabelecimento.findMany(
        {
            skip: 0,
            take: 30,
            where: {
                municipio: "2785",
                bairro: "SERRARIA",
            },
        }

    );
    return NextResponse.json(estabelecimentos);
}

export async function POST(request: Request, response: Response) {
    const data = await request.json();
    try{
        const estabelecimento = await prisma.estabelecimento.create({
            data
            });
            return NextResponse.json(estabelecimento);
    }catch(error){
        return NextResponse.json({message: "Erro ao criar estabelecimento"});
    }
}