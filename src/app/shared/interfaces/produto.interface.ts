export interface Produto {
  id: string | number;
  urlImg: string;
  valor: number;
  titulo: string;
  desconto?: number;
  vendidos: number;
  descricao: string;
}
