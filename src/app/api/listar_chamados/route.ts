import axios from "axios";
import { NextResponse } from "next/server";




export async function GET() {
    const apiUrl = "https://demo.sgp.net.br/api";
    const dataList = async () => axios.post(`${apiUrl}/chamados`, {

        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            cpfcnpj: '68.857.751/0001-62',
            senha: 'centraldoassinante',
            contrato: '308'
        }
    });
    const data = await dataList();
    console.log(data)
    // return NextResponse.json(data);
}