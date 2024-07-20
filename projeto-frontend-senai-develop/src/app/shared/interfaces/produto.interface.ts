export interface Produto {
    id: string,
    urlImg: string,
    valor: number,
    titulo: string,
    desconto?: number,
    vendidos: number,
    descricao: string
  }