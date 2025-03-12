import React from 'react'
import FormInput from './FormInput'
import { useRouter } from 'next/navigation'
import useEstabelecimentos from '@/hooks/useEstabelecimentos'

export default function BuscaEstabelecimento() { 
    const {buscaEstabelecimento} = useEstabelecimentos()
    const router = useRouter()
const buscaEstabelecimentos = async ({busca,tipo}:{busca: string, tipo: string}) => {
    await buscaEstabelecimento({busca,tipo})
    const url = `/estabelecimentos/busca?${tipo}=${busca}`
    router.push(url)
        
}
//busca?cep=57046000
    return (
        <div className='flex justify-end'>
            <FormInput name='busca' handleBusca={buscaEstabelecimentos} />
         
        </div>
    )
}
