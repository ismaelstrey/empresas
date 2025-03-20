'use client'
import { formatarData } from "@/functions/formataDataPtBr";
import useEstabelecimentos from "@/hooks/useEstabelecimentos";
import { motion } from "framer-motion";
import ShowImput from "./inputs/ShowInput";
import { FormEvent, useState } from "react";
interface PropsUrl  {
    [key:string]:string
}
export default function Estabelecimentos() {     

    const defaultUrl:PropsUrl = {
nome:"",
cnpj:"",
cep:"",
municipio:"",
bairro:""

    }

    const [url, setUrl] = useState<PropsUrl>(defaultUrl)
    const { estabelecimentos} = useEstabelecimentos() 
    const   cadastroUrl = (value:string,type:string)=>{
        const url = new URLSearchParams();
        url.set(type, value);
        return url.toString();
    }

    const geraUrl = (value?:string,type?:string) => {

        const valor =  type && value && {[type]: value} || {name:'Strey'}
      type && value &&  setUrl(valor)

      console.log(value)

    }




    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 max-w-full overflow-x-auto rounded-5xl"
        >          
            <motion.div 
                className="bg-white rounded-xl shadow-lg "
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
            >
                <table className="min-w-full divide-y divide-gray-200  rounded-2xl">
                    <thead className="bg-gradient-to-r from-blue-600 to-purple-600 rounded">
                        <tr>                           
                            <ShowImput title="Nome Fantasia" type="nome" geraUrl={geraUrl}/>
                            <ShowImput title="CNAE" type="cnae" geraUrl={geraUrl}/>
                            <ShowImput title="CNPJ" type="cnpj" geraUrl={geraUrl}/>   
                            <ShowImput title="CEP" type="cep" geraUrl={geraUrl}/>                      
                            <ShowImput title="Municipio" type="municipio" geraUrl={geraUrl}/>
                         
                            <ShowImput title="Bairro" type="bairro" geraUrl={geraUrl}/>                        
                            <th className="px-6 py-4 text-left text-sm font-semibold text-white"><span>Data Situação</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 p-4">
                        {estabelecimentos?.map((estabelecimento, index) => (
                            <motion.tr 
                                key={estabelecimento.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ backgroundColor: "#f3f4f6" }}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4 text-sm text-gray-800">{estabelecimento.nome_fantasia}</td>
                                <td title={`${estabelecimento.cnae_fiscal_secundaria}`} className="px-6 py-4 text-sm text-gray-800">{estabelecimento.cnae_fiscal}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{estabelecimento.cnpj}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{estabelecimento.cep}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{estabelecimento.municipio}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{estabelecimento.bairro}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {estabelecimento.data_situacao_cadastral && formatarData(estabelecimento.data_situacao_cadastral)}
                                </td>
                            </motion.tr>
                        ))}
            
                    </tbody>
                </table>
            </motion.div>
        </motion.div>
    );
}
