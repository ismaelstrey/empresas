export function formatarData(data: string): string {
    if (data.length !== 8 || isNaN(Number(data))) {
        throw new Error("Formato inválido. Use uma string no formato YYYYMMDD.");
    }

    const ano = data.substring(0, 4);
    const mes = data.substring(4, 6);
    const dia = data.substring(6, 8);

    return `${dia}/${mes}/${ano}`;
}