import React from 'react'
import FormInput from './FormInput'

export default function BuscaEstabelecimento(
    {
        buscaEstabelecimentos }:
        { buscaEstabelecimentos: ({ busca, tipo }: { busca: string, tipo: string }) => void }) {

    return (
        <div className='flex h-14'>
            <FormInput name='busca' handleBusca={buscaEstabelecimentos} />
        </div>
    )
}
