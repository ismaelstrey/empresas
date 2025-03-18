import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaIdCard, FaCheckCircle, FaRegistered } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { municipio } from "@prisma/client";
import axios from "axios";
import InputText from "./inputText";


interface Option {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const MultiCheckBox = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [buscaMunicipio, setBuscaMunicipio] = useState('')
  const [municipios, setMunicipios] = useState<municipio[] | []>([])

  const buscaMunicipios = async (municipio:string):Promise <void> =>{
      const url = `/api/municipios/busca?municipio=${municipio}`
      axios.get(url).then((response) => {
         setMunicipios(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }
  
      useEffect(()=>{
          if(buscaMunicipio.length >= 3){
           buscaMunicipios(buscaMunicipio)      
          }else{
              setMunicipios([])
          }
      },[buscaMunicipio])

  const options: Option[] = [
    { id: "nome_fantasia", label: "Nome Fantasia", icon: <MdBusinessCenter className="text-lg" /> },
    { id: "cep", label: "CEP", icon: <FaMapMarkerAlt className="text-lg" /> },
    { id: "cnae", label: "CNAE", icon: <FaRegistered className="text-lg" /> },
    { id: "municipio", label: "Município", icon: <FaBuilding className="text-lg" /> },
    { id: "cnpj", label: "CNPJ", icon: <FaIdCard className="text-lg" /> },
    { id: "situacao_cadastral", label: "Situação", icon: <FaCheckCircle className="text-lg" /> }
  ];

  const handleToggle = (id: string) => {
    setSelectedOptions(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white rounded-xl shadow-lg max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-medium mb-3 text-gray-800">
        Busca Avançada
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleToggle(option.id)}
            className={`
              p-2 rounded-lg transition-all duration-200
              flex items-center gap-2
              ${
                selectedOptions.includes(option.id)
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {option.icon}
            <span className="text-sm">{option.label}</span>
          </motion.button>
        ))}
      </div>

      {selectedOptions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 p-2 bg-gray-50 rounded-lg"
        >
          <div className="flex flex-wrap gap-1">
            <form className="flex w-full flex-col gap-4">
            {selectedOptions.map((id) => (

                <div className="flex w-full" key={id}>
              
                   {/* {id === 'municipio' && } */}
                   <InputText id={id} options={options.filter((item) => item.id === id)[0]} />
               
                
                </div>      
            ))}
            <button className="bg-blue-500 min-h-16 rounded-2xl text-white">Buscar</button>
            </form>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MultiCheckBox;