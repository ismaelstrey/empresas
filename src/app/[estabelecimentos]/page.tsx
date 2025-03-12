'use client'
import Estabelecimentos from '@/components/Estabelecimento'
import BuscaEstabelecimento from '@/components/Estabelecimento/BuscaEstabelecimento'
import React from 'react'
export default function PageEstabelecimentos() {
    return (
        <div className='min-h-screen flex-col flex gap-4'>
            <BuscaEstabelecimento />
            <Estabelecimentos />
        </div>
    )
}
