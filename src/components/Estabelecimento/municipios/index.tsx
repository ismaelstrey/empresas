import { municipio } from "@prisma/client"


const Municipios = ({municipios,onSelect}:{municipios:municipio[], onSelect:(id:string,code:string)=>void}) => {
    return (
        <div className="fixed top-20 right-20 bg-white border border-gray-400 rounded-2xl">
            <ul>
            {
                    municipios.map((municipio) => 
                        { return (
                                    <li onClick={()=>onSelect(municipio.codigo|| '',municipio.descricao || '')} className='hover:bg-blue-500 px-4 hover:text-white hover:scale-110 hover: cursor-pointer hover:rounded-2xl' key={municipio.id}>
                                    {municipio.descricao}    
                                    </li>
                            )} )
            }</ul>
        </div>
    )
}

export default Municipios