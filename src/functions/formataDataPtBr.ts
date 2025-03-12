export function formatarData(data: string): string {
    if (data.length !== 8 || isNaN(Number(data))) {
       
        return 'Não Informado'
    }

    const ano = data.substring(0, 4);
    const mes = data.substring(4, 6);
    const dia = data.substring(6, 8);

    return `${dia}/${mes}/${ano}`;
}