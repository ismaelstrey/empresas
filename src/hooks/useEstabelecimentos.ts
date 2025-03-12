'use client'
import { estabelecimento } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getEstabelecimentos = async ( busca?: string, tipo?: string ): Promise<estabelecimento[] | []> => {
    const buscaUrl = busca && tipo ? `/api/estabelecimentos/busca?${tipo}=${busca}` : '/api/estabelecimentos';
    const response = await fetch(buscaUrl);
    if (!response.ok) throw new Error('Erro ao carregar estabelecimentos');
    return response.json();
};
const useEstabelecimentos = (busca?: string, tipo?: string ) => {

console.log(busca, tipo)
const estabelecimentosAll = () => getEstabelecimentos(busca, tipo)

    const { data: estabelecimentos, error: estabelecimentosError } = useQuery({
        queryKey: ['estabelecimentos'],
        queryFn: estabelecimentosAll,

    });
    if (estabelecimentosError) console.error(estabelecimentosError);
    return { estabelecimentos, estabelecimentosError };
};

export default useEstabelecimentos;