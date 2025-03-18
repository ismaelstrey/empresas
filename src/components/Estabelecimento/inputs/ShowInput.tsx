
import { useState } from "react"
import { IoArrowDown } from "react-icons/io5"
import ImputText from "./InputText"
import { useSearchParams } from "next/navigation"

const ShowImput = ({title, type}:{title:string, type:string}) =>{
    const [active, setActive] = useState(false)
    const search = useSearchParams();
    const params = Object.fromEntries(search.entries());
    const tipo = Object.keys(params)[0] || "";
    const busca = params[tipo] || "";

    console.log(params)
    const handeleToogle = ()=>{
        setActive(!active)
    }

    return (
        <th >
          <div className=" flex justify-between px-6 py-4 text-left text-sm font-semibold text-white">
            <h2>{busca}</h2>
          <span>{title}</span>
        <IoArrowDown onClick={handeleToogle}  title={title} size={18} className={`hover:text-amber-300 hover:scale-110 hover:cursor-pointer ${!active ? '-rotate-90 text-white' :'text-amber-200'}`}/>       
          </div>
{active && <ImputText name={type} />}
       </th>
    )

}

export default ShowImput