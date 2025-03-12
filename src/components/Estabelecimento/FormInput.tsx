import React from 'react'
import { motion } from 'framer-motion'

export default function FormInput({ name, handleBusca }: { name: string, handleBusca: ({ busca, tipo }: { busca: string, tipo: string }) => void }) {
    const [busca, setBusca] = React.useState('')
    const [tipo, setTipo] = React.useState('cep')

    const buscar = () => {
        handleBusca({ busca, tipo })
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-lg"
        >
            <motion.div 
                className="flex-1"
                whileTap={{ scale: 0.99 }}
            >
                <input 
                    onChange={e => setBusca(e.target.value)} 
                    type="text" 
                    name={name} 
                    placeholder="Digite sua busca..."
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg 
                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                             transition-all duration-300 ease-in-out" 
                    autoComplete='off' 
                />
            </motion.div>

            <motion.div
                whileTap={{ scale: 0.99 }}
                className="w-60"
            >
                <select 
                    name={name} 
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg
                             appearance-none cursor-pointer
                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                             transition-all duration-300 ease-in-out"
                    onChange={e => setTipo(e.target.value)}
                >
                    <option value='' >SELECIONE O TIPO</option>
                    <option value='cep'>CEP</option>
                    <option value='municipio'>MUNICÍPIO</option>
                </select>
            </motion.div>

            <motion.button 
                onClick={buscar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg
                         hover:from-blue-600 hover:to-blue-800 
                         focus:outline-none focus:ring-2 focus:ring-blue-300
                         transition-all duration-300 ease-in-out
                         shadow-md hover:shadow-lg"
            >
                Buscar
            </motion.button>
        </motion.div>
    )
}
