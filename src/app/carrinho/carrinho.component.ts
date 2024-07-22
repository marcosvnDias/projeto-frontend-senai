import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Produto } from '../shared/interfaces/produto.interface';
import { ProdutosService } from '../shared/services/produtos.service';

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

  constructor(private router: Router, private produtosService: ProdutosService) { }

  ngOnInit(): void {
    // Simulando produtos no carrinho
    this.produtosCarrinho = this.produtosService.getProdutos().map(produto => ({
      ...produto,
      quantidade: 1
    }));
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
    }
  }

  removerProduto(index: number) {
    this.produtosCarrinho.splice(index, 1);
  }

  comprar() {
    alert('Compra realizada com sucesso!');
  }

  iniciarBusca() {
    this.router.navigate(['/']);
  }
}
