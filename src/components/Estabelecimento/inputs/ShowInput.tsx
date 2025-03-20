
import { useState } from "react"
import { IoArrowDown } from "react-icons/io5"
import ImputText from "./InputText"


interface PropsUrl  {
 
 title: string;
 type: string;
 geraUrl: () => void;
}

const ShowImput = ({title, type, geraUrl}:PropsUrl) =>{
    const [active, setActive] = useState(false)

  


    const handeleToogle = ()=>{
        setActive(!active)
    }
 

    return (
        <th >
          <div className=" flex justify-between px-6 py-4 text-left text-sm font-semibold text-white">    
          <span>{title}</span>
        <IoArrowDown onClick={handeleToogle}  title={title} size={18} className={`hover:text-amber-300 hover:scale-110 hover:cursor-pointer ${!active ? '-rotate-90 text-white' :'text-amber-200'}`}/>       
          </div>
          {active && <ImputText type={type} geraUrl={geraUrl}/>}
       </th>
    )

}

export default ShowImput