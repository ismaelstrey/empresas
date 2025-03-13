'use client'
import { estabelecimento } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useEstabelecimentos = () => {
    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());
    const tipo = Object.keys(params)[0] || "";
    const busca = params[tipo] || "";

    const getEstabelecimentos = async (): Promise<estabelecimento[] | []> => {
        const buscaUrl = `/api/estabelecimentos/busca?${tipo}=${busca}`;
        const response = await fetch(buscaUrl);
        if (!response.ok) throw new Error('Erro ao carregar estabelecimentos');
        return response.json();
    };

    const { data: estabelecimentos, error: estabelecimentosError } = useQuery({
        queryKey: ['estabelecimentos', busca, tipo],
        queryFn: getEstabelecimentos,
    });

    if (estabelecimentosError) console.error(estabelecimentosError);
    return { estabelecimentos, estabelecimentosError };
};

export default useEstabelecimentos;