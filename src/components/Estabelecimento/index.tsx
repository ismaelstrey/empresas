
import { formatarData } from "@/functions/formataDataPtBr";
import { estabelecimento } from "@prisma/client";


export default function Estabelecimentos({ estabelecimentos }: { estabelecimentos?: estabelecimento[] }) {


    return (
        <div className="flex flex-col w-full m-4">

            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Nome Fantasia</th>
                        <th>CNPJ</th>
                        <th>Municipio</th>
                        <th>Bairro</th>
                        <th>Data Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {estabelecimentos?.map((estabelecimento) => (
                        <tr key={estabelecimento.id}>
                            <td>{estabelecimento.nome_fantasia}</td>
                            <td>{estabelecimento.cnpj}</td>
                            <td>{estabelecimento.municipio}</td>
                            <td>{estabelecimento.bairro}</td>
                            <td>{estabelecimento.data_situacao_cadastral && formatarData(estabelecimento.data_situacao_cadastral)}</td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>
        </div>
    );
}
