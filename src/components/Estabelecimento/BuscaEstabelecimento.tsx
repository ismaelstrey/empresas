import React from 'react'
import FormInput from './FormInput'
import { useRouter } from 'next/navigation'

export default function BuscaEstabelecimento() { 
const router = useRouter()
const buscaEstabelecimentos = async ({busca,tipo}:{busca: string, tipo: string}) => {
    const url = `/estabelecimentos?${tipo}=${busca}`
    router.push(url)        
}
    return (
        <div className='flex justify-end'>
            <FormInput name='busca' handleBusca={buscaEstabelecimentos} />         
        </div>
    )
}
