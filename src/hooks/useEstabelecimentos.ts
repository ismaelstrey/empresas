'use client'
import { estabelecimento } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useEstabelecimentos = () => {
    const [busca, setBusca] = useState<estabelecimento[]>([]);
    const queryClient = useQueryClient();
    const getEstabelecimentos = async (): Promise<estabelecimento[] | []> => {
        const response = await fetch('/api/estabelecimentos');
        if (!response.ok) throw new Error('Erro ao carregar estabelecimentos');
        return response.json();
    };
    const buscaEstabelecimentos = async ({ busca, tipo }: { busca: string, tipo: string }) => {
        const buscaUrl = `/api/estabelecimentos/busca?${tipo}=${busca}`
        const response = async () => {
            const dat = await fetch(buscaUrl)
            setBusca(await dat.json())
            return dat.json()
        };
        return response();
    };
    const { mutate: buscaEstabelecimento } = useMutation<estabelecimento, Error, { busca: string, tipo: string }>(

        {
            mutationFn: buscaEstabelecimentos,
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