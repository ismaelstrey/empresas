import { municipio } from "@prisma/client"


const ListItens = ({itens,onSelect}:{itens:municipio[], onSelect:(id:string,code:string)=>void}) => {
    return (
        <div className=" bg-white border border-gray-400 rounded-2xl">
            <ul>
            {
        itens.map((iten) => 
            { return (
                        <li onClick={()=>onSelect(iten.codigo|| '',iten.descricao || '')} className='hover:bg-blue-500 px-4 hover:text-white hover:scale-110 hover: cursor-pointer hover:rounded-2xl' key={iten.id}>
                        {iten.descricao}    
                        </li>
                )} )
            }</ul>
        </div>
    )
}

export default ListItens