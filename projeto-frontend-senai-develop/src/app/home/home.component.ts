import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardProdutoComponent } from "../card-produto/card-produto.component";
import { CommonModule } from '@angular/common';
import { Produto } from '../shared/interfaces/produto.interface';
import { Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../shared/services/produto.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CardProdutoComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  produtos:Produto[] = []

  produtosCarousel:Produto[] = [...this.produtos]; 
  
  produtosMaisVendidos:Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  /*ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.trocarPosicoes(this.produtosCarousel);
    let maisVendidos:Produto[] = this.acharMaisVendidos(this.produtosCarousel);
    this.produtosMaisVendidos = maisVendidos;
    console.log(this.produtosMaisVendidos)
  }*/

    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
        this.produtosCarousel = [...this.produtos];
        this.trocarPosicoes(this.produtosCarousel);
        this.produtosMaisVendidos = this.acharMaisVendidos(this.produtos);
      });
    }

  /*trocarPosicoes(produtos:Produto[]) {
    setInterval(() => {
      let primeiroItem = produtos.shift();
      if (primeiroItem) {
        produtos.push(primeiroItem);
      }
    }, 5700);
  }*/

    trocarPosicoes(produtos: Produto[]): void {
      setInterval(() => {
        const primeiroItem = produtos.shift();
        if (primeiroItem) {
          produtos.push(primeiroItem);
          this.produtosCarousel = [...produtos];
        }
      }, 5700);
    }

  acharMaisVendidos(produtos:Produto[]) {
    let produtosMaisVendidos:Produto[] = [];
    for (let i = 0; i <= produtos.length; i++) {
      let maisVendido: Produto = {
        id: "",
        urlImg: "",
        valor: 0,
        titulo: "",
        desconto: 0,
        vendidos: 0,
        descricao: ""
      };
  
      produtos.forEach((produto) => {
        if (produto.vendidos > maisVendido.vendidos) {
          maisVendido = produto;
        }
      });
  
      produtosMaisVendidos.push(maisVendido);
      let produtosAtualizado:Produto[] = produtos.filter((item) => item.titulo != maisVendido.titulo);
      produtos = produtosAtualizado; 
      
    }
    
    // console.log(produtos)
    produtos = produtosMaisVendidos;
    return produtos
  }

  redirecionaDetalhesProduto(id: string): void {
    this.router.navigate(['/produto', id]);

  }
}