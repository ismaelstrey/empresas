import { motion } from "motion/react"
import { useSearchParams } from "next/navigation"
import {  FormEvent,  useEffect, useState } from "react"

const ImputText = ({name,handeChangeInput}:{name:string,handeChangeInput:(value:string,name:string) =>{value:string,name:string}}) => {
const [value, setValue] = useState('')
const [url, setUrl] = useState([])
const searchParams = useSearchParams();
const params = Object.fromEntries(searchParams.entries());
console.log(params)


useEffect(()=>{
// setUrl([params] )  
},[])
console.log(url)

function buscar(e:FormEvent<HTMLFormElement>){ 
    e.preventDefault()
    console.log(value)
    handeChangeInput(value,name)
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
            name={name} 
            placeholder={`Pesquisa por ${name}`}
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