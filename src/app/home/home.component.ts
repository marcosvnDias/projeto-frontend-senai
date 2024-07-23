import { Component, OnInit } from '@angular/core';
import { CardProdutoComponent } from "../card-produto/card-produto.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/interfaces/produto.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Produto[] = [];
  produtosCarousel: Produto[] = [];
  produtosMaisVendidos: Produto[] = [];

  constructor(private router: Router, private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getProdutosEmOferta().then((produtos: Produto[]) => {
      this.produtos = produtos;
      this.produtosCarousel = produtos.slice(0, 5);
      this.trocarPosicoes(this.produtosCarousel);
    }).catch((error: any) => {
      console.error('Erro ao carregar produtos em oferta:', error);
    });

    this.produtosService.getProdutosMaisVendidos().then((produtos: Produto[]) => {
      this.produtosMaisVendidos = produtos;
    }).catch((error: any) => {
      console.error('Erro ao carregar produtos mais vendidos:', error);
    });
  }

  trocarPosicoes(produtos: Produto[]) {
    setInterval(() => {
      let primeiroItem = produtos.shift();
      if (primeiroItem) {
        produtos.push(primeiroItem);
      }
    }, 5700);
  }

  selecionado(produto: Produto) {
    this.router.navigate(['/detalhes', produto.id]);
  }
}
