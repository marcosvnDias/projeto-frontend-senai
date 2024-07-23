import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Produto } from '../shared/interfaces/produto.interface';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  produtosCarrinho: (Produto & { quantidade: number })[] = [];
  valorFrete: number = 20; // Valor fixo do frete

  constructor(private router: Router) {}

  ngOnInit(): void {
    const carrinho = sessionStorage.getItem('carrinho');
    this.produtosCarrinho = carrinho ? JSON.parse(carrinho) : [];
  }

  get valorTotalProdutos(): number {
    return this.produtosCarrinho.reduce((total, produto) => total + (produto.valor * produto.quantidade), 0);
  }

  get valorTotalCompra(): number {
    return this.valorTotalProdutos + this.valorFrete;
  }

  alterarQuantidade(index: number, change: number) {
    const produto = this.produtosCarrinho[index];
    if (produto.quantidade + change >= 1) {
      produto.quantidade += change;
      sessionStorage.setItem('carrinho', JSON.stringify(this.produtosCarrinho));
    }
  }

  removerProduto(index: number) {
    this.produtosCarrinho.splice(index, 1);
    sessionStorage.setItem('carrinho', JSON.stringify(this.produtosCarrinho));
  }

  comprar() {
    alert('Compra realizada com sucesso!');
  }

  iniciarBusca() {
    this.router.navigate(['/']);
  }
}
