import { municipio } from '@prisma/client'
import axios from 'axios'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MultiCheckBox from './selectInput'


export const BuscaAvancada = ({name}:{name:string}) =>     
{
    const [busca, setBusca] = useState('')
    const [municipios, setMunicipios] = useState<municipio[] | []>([])

const buscaMunicipio = async (tipo:string) =>{
    const url = `/api/municipios/busca?${tipo}=${busca}`
    axios.get(url).then((response) => {
       setMunicipios(response.data)
    }).catch((error) => {
        console.log(error)
    })
}
    useEffect(()=>{
        console.log(name)
        if(busca.length >= 3 && name){
         buscaMunicipio(name)      
        }else{
            setMunicipios([])
        }
    },[busca, name])
   console.log(municipios)
    return (
<>
<motion.div 
        className="flex h-24 w-full gap-4 p-4 bg-white rounded-lg shadow-lg"
        whileTap={{ scale: 0.99 }}
        >
        <input 
            onChange={e => setBusca(e.target.value)} 
            type="text" 
            name={name} 
            placeholder={`Selecione um ${name}`}
            className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg 
                     focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                     transition-all duration-300 ease-in-out" 
            autoComplete='off' 
        />    
        </motion.div>
        {
            municipios &&
               <motion.div                
                        className="flex-1"
                        whileTap={{ scale: 0.99 }}
                    >
                        <ul>            
        {    municipios.map((municipio) => {
                return (                 
                        <Link href={`/estabelecimentos?municipio=${municipio.codigo}`} onClick={()=>setMunicipios([])}>
                       <li className='hover:bg-blue-500 px-4 hover:text-white hover:scale-110 hover: cursor-pointer hover:rounded-2xl' key={municipio.id}>
                            {municipio.descricao}    </li>   
                        </Link>                                  
                )
                })}
                </ul>
         </motion.div>
         }
</>
    )
}