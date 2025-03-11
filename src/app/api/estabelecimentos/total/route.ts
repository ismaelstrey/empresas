import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
    const totaeEtabelecimentos = await prisma.estabelecimento.count(
        {
            where: {
                municipio: "2785",
                bairro: "SERRARIA",
            },
        }

    );
    return NextResponse.json({ total: totaeEtabelecimentos });
}