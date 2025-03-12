'use client'
import Estabelecimentos from '@/components/Estabelecimento'
import BuscaEstabelecimento from '@/components/Estabelecimento/BuscaEstabelecimento'
import useEstabelecimentos from '@/hooks/useEstabelecimentos'
import React from 'react'
export default function PageEstabelecimentos() {
    const { estabelecimentos } = useEstabelecimentos()
    return (
        <div className='min-h-screen flex-col flex gap-4'>
            <BuscaEstabelecimento />
            <Estabelecimentos estabelecimentos={estabelecimentos} />
        </div>
    )
}
