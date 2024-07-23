import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';
import { Comentario } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseUrl = 'assets/data'; // Caminho para os arquivos JSON
  private carrinho: (Produto & { quantidade: number })[] = [];

  constructor() { }

  getProdutosEmOferta(): Promise<Produto[]> {
    return fetch(`${this.baseUrl}/ofertas.json`)
      .then(response => response.json());
  }

  getProdutosMaisVendidos(): Promise<Produto[]> {
    return fetch(`${this.baseUrl}/mais-vendidos.json`)
      .then(response => response.json());
  }

  getTodosProdutos(): Promise<Produto[]> {
    return fetch(`${this.baseUrl}/produtos.json`)
      .then(response => response.json());
  }

  getProduto(id: string): Promise<Produto> {
    return this.getTodosProdutos()
      .then(produtos => produtos.find(produto => produto.id === id) || Promise.reject('Produto não encontrado'));
  }

  getComentarios(produtoId: string): Promise<Comentario[]> {
    return fetch(`${this.baseUrl}/comentarios.json`)
      .then(response => response.json())
      .then(comentarios => comentarios.filter((comentario: Comentario) => comentario.produtoId === produtoId));
  }

  getCarrinho(): (Produto & { quantidade: number })[] {
    return this.carrinho;
  }

  adicionarAoCarrinho(produto: Produto) {
    const item = this.carrinho.find(p => p.id === produto.id);
    if (item) {
      item.quantidade++;
    } else {
      this.carrinho.push({ ...produto, quantidade: 1 });
    }
  }

  removerDoCarrinho(id: string) {
    this.carrinho = this.carrinho.filter(produto => produto.id !== id);
  }
}
