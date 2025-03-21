'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BuscaAvancada } from './_input'

import { FaEye } from 'react-icons/fa'
import MultiCheckBox from './selectInput'
export default function FormInput() {   
    const [tipo, setTipo] = useState<string>('')
    const [buscaAvancada , setBuscaAvancada] = useState<boolean>(false)
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex w-full flex-wrap gap-4 p-4 bg-white rounded-lg shadow-lg"
        >   
        <FaEye 
            onClick={()=>setBuscaAvancada(!buscaAvancada)}
            className="absolute right-4 top-4 cursor-pointer"
        />       
   {!buscaAvancada ?     <motion.div
                whileTap={{ scale: 0.99 }}
                className="w-full"
            >
                <select 
                    id="tipo"
                    defaultValue={''}
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg
                             appearance-none cursor-pointer
                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                             transition-all duration-300 ease-in-out"
                    onChange={e => setTipo(e.target.value)}                 
                >
                    <option value=''>SELECIONE O TIPO</option>
                    <option value='cep'>CEP</option>
                    <option value='municipio'>MUNICÍPIO</option>
                </select>
                {
            tipo.length > 2 &&     <BuscaAvancada name={tipo}/>
        }
            </motion.div>
            : 
             <MultiCheckBox/>
            }
        

          
    
        </motion.div>
    )
}
