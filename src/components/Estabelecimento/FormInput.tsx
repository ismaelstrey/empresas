import React from 'react'

export default function FormInput({ name, handleBusca }: { name: string, handleBusca: ({ busca, tipo }: { busca: string, tipo: string }) => void }) {


    const [busca, setBusca] = React.useState('')
    const [tipo, setTipo] = React.useState('cep')

    const buscar = () => {
        handleBusca({ busca, tipo })
    }

    return (
        <>
            <input onChange={e => setBusca(e.target.value)} type="text" name={name} className='w-full border border-gray-400 rounded-md text-center' autoComplete='off' />
            <select name={name} className='w-60 border border-gray-400 rounded-md text-center' onChange={e => setTipo(e.target.value)}>
                <option value=''>Tipo</option>
                <option value='cep'>CEP</option>
                <option value='municipio'>MUNICIPIO</option>
            </select>
            <button onClick={buscar} className='w-20 border border-gray-400 rounded-md text-center'>Buscar</button>
        </>

    )
}
