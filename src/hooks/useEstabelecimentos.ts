'use client'
import { estabelecimento } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useEstabelecimentos = () => {
    const [busca, setBusca] = useState<estabelecimento[]>([]);
    const queryClient = useQueryClient();

    const getEstabelecimentos = async ({ busca, tipo }: { busca?: string, tipo?: string }): Promise<estabelecimento[] | []> => {
const buscaUrl = busca && tipo ? `/api/estabelecimentos/busca?${tipo}=${busca}` : '/api/estabelecimentos';

        const response = await fetch(buscaUrl);
        if (!response.ok) throw new Error('Erro ao carregar estabelecimentos');
        return response.json();
    };

    const { mutate: buscaEstabelecimento } = useMutation<estabelecimento, Error, { busca: string, tipo: string }>(

        {
            mutationFn: getEstabelecimentos,
            onSuccess: () => {
                console.log('Servidor FTP atualizado com sucesso!');
                queryClient.refetchQueries();
                queryClient.invalidateQueries({ queryKey: ['estabelecimentos'] });
                
            },
            onError: (error: Error) => {
                console.error('Erro ao buscar item:', error);
            },
        }
    );


    const { data: estabelecimentos, error: estabelecimentosError } = useQuery({
        queryKey: ['estabelecimentos'],
        queryFn: getEstabelecimentos,

    });
    if (estabelecimentosError) console.error(estabelecimentosError);
    return { estabelecimentos, estabelecimentosError, buscaEstabelecimento, busca };
};

export default useEstabelecimentos;