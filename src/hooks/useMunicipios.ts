'use client'
import { estabelecimento } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useMunicipios = () => {
    const searchParams = useSearchParams();
    const municipio = 'municipio';

    const getMunicipios = async (): Promise<estabelecimento[] | []> => {
        const buscaUrl = `/api/municipios/busca?${municipio}`
        const response = await fetch(buscaUrl);
        if (!response.ok) throw new Error('Erro ao carregar municipios');
        return response.json();
    };

    const { data: municipios, error: municipiosError } = useQuery({
        queryKey: ['municipios', municipio],
        queryFn: getMunicipios,
    });

    if (municipiosError) console.error(municipiosError);
    return { municipios, municipiosError };
};

export default useMunicipios;