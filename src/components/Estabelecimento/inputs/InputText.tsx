import { motion } from "motion/react"

import {  FormEvent, useState } from "react"

type UrlProps = {
    type: string;
    geraUrl: ( value:{type?:string, value?:string}) => void;
  };

const ImputText:React.FC<UrlProps> = ({type, geraUrl}) => {
const [value, setValue] = useState("")


function buscar(e:FormEvent<HTMLFormElement>){ 
    e.preventDefault()
    geraUrl({value, type}) 
 }
    
    return (
        <motion.div 
        className="flex rounded-lg shadow-lg"
        whileTap={{ scale: 0.99 }}
        >
            <form onSubmit={(e)=>buscar(e)} >
        <input 
            onChange={e => setValue(e.target.value)} 
            type="text" 
            name={type} 
            placeholder={`Pesquisa por ${type}`}
            className="w-full h-10 m-4 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg text-sm p-2.5
                     focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                     transition-all duration-300 ease-in-out" 
            autoComplete='off' 
        />   
         </form>
        </motion.div>
    )
}

export default ImputText