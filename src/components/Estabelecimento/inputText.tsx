import { municipio } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import Municipios from "./municipios";

interface Option {
    id: string;
    label: string;
    icon: React.ReactNode;
  }
  interface Pesquisar {
    tipo: string;
    descricao:string;
    codigo: string;
  }
const InputText = ({id, options}:{id:string,options:Option}) => {
    const [municipios, setMunicipios] = useState<municipio[] | []>([])
    const [busca, setBusca] = useState('')
    const [pesquisar, setPesquisar] = useState<Pesquisar[]>([])

const buscaMunicipio = async () =>{
    const url = `/api/municipios/busca?municipio=${busca}`
    axios.get(url).then((response) => {
       setMunicipios(response.data)
    }).catch((error) => {
        console.log(error)
    })
}

const selecionMunicipio = (codigo:string, descricao:string)=>{
const prev = pesquisar.filter((pesquisa) => pesquisa.tipo !== 'municipio')

setPesquisar([...prev,{tipo:options.id, codigo, descricao}])
setMunicipios([])
}

    useEffect(()=>{
        if(busca.length >= 3 && options.id === 'municipio'){
         buscaMunicipio()      
        }else{
            setMunicipios([])
        }
    },[busca])


    console.log(pesquisar)
return (
    <>
  {
    options.id ==='municipio' ?
   <> <label htmlFor={id} className="flex gap-2 min-w-40"> {options.icon}  {options.label}</label>
   <input onChange={(e)=>setBusca(e.target.value)} className="w-full px-4 py-3 text-gray-700 bg-red-500 border-2 border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 ease-in-out" 
   type="text" name={id} id={id} /></>
   :
   <><label htmlFor={id} className="flex gap-2 min-w-40"> {options.icon}  {options.label}</label>
   <input className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 ease-in-out" 
   type="text" name={id} id={id} /></>
  }
  {
    municipios && 

   <Municipios municipios={municipios} onSelect={selecionMunicipio} />   
                 
    }


<span className="fixed top-2">
    {
        pesquisar.map((pesquisa,key) => {
            return (
                <span key={key}>
                    {pesquisa.tipo} {pesquisa.codigo}
                </span>
            )
        })
    }
    </span>
   </>

)
}
export default InputText