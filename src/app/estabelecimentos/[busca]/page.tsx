'use client'
import Estabelecimentos from '@/components/Estabelecimento';
import BuscaEstabelecimento from '@/components/Estabelecimento/BuscaEstabelecimento';
import useEstabelecimentos from '@/hooks/useEstabelecimentos';
import { useSearchParams } from 'next/navigation';
import React, {  useEffect } from 'react'

export default function BuscaEstabelecimentoPage() {
    const searchParams = useSearchParams();
    const municipio = searchParams.get("municipio") || undefined;
    const bairro = searchParams.get("bairro")?.toUpperCase() || undefined;
    const nome = searchParams.get("nome")?.toUpperCase() || undefined;
    const situacao_cadastral = searchParams.get("situacao_cadastral") || undefined;
    const cep = searchParams.get("cep") || undefined;    // Exemplo: filtro por nome do estabelecimento

    // Construindo a query dinâmica
    const filtros: any = {};
    if (situacao_cadastral) filtros.situacao_cadastral = situacao_cadastral;
    if (municipio) filtros.municipio = municipio;
    if (cep) filtros.cep = cep;
    if (bairro) filtros.bairro = bairro;
    if (nome) filtros.nome = { contains: nome, mode: "insensitive" };

    // const chaves = Object.keys(filtros);
    const { busca, buscaEstabelecimento } = useEstabelecimentos()


    useEffect(() => {
 async () => {
    nome && await buscaEstabelecimento({ busca: filtros.nome, tipo: 'nome' }),
    situacao_cadastral && await buscaEstabelecimento({ busca: filtros.situacao_cadastral, tipo: 'situacao_cadastral' }),
    cep && await  buscaEstabelecimento({ busca: filtros.cep, tipo: 'cep' }),
    bairro && await  buscaEstabelecimento({ busca: filtros.bairro, tipo: 'bairro' }),
    municipio && await  buscaEstabelecimento({ busca: filtros.municipio, tipo:'municipio' })
        }
    

    }, [])

    console.log(busca)


    return (
        <div className='flex flex-col'>
            <BuscaEstabelecimento/>
            <Estabelecimentos estabelecimentos={busca} />
           
        </div>

    )
}


