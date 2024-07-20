import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardProdutoComponent } from "../card-produto/card-produto.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

interface Produto {
  urlImg: string,
  valor: number,
  titulo: string,
  desconto?: number,
  vendidos: number
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CardProdutoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router, private produtosService: ProdutosService) {
  }

  produtos:Produto[] = this.produtosService.getProdutos();

  produtosCarousel:Produto[] = [...this.produtos]; 
  
  produtosMaisVendidos:Produto[] = [];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.trocarPosicoes(this.produtosCarousel);
    let maisVendidos:Produto[] = this.acharMaisVendidos(this.produtosCarousel);
    this.produtosMaisVendidos = maisVendidos;
    console.log(this.produtosMaisVendidos)
  }

  trocarPosicoes(produtos:Produto[]) {
    setInterval(() => {
      let primeiroItem = produtos.shift();
      if (primeiroItem) {
        produtos.push(primeiroItem);
      }
    }, 5700);
  }

  acharMaisVendidos(produtos:Produto[]) {
    let produtosMaisVendidos:Produto[] = [];
    for (let i = 0; i <= produtos.length; i++) {
      let maisVendido: Produto = {
        urlImg: "",
        valor: 0,
        titulo: "",
        desconto: 0,
        vendidos: 0
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



// substituído pelo service, com mock
   // produtos:Produto[] = [{
  //   urlImg: "../assets/geladeira.jpg",
  //   valor: 3450,
  //   titulo: "Geladeira Panasonic A+",
  //   desconto: 2380,
  //   vendidos: 21
  // }, {
  //   urlImg: "../assets/kindle.jpg",
  //   valor: 1500,
  //   titulo: "Kindle 11ª Geração",
  //   desconto: 1200,
  //   vendidos: 5679
  // },
  // {
  //   urlImg: "../assets/xbox.jpg",
  //   valor: 4000,
  //   titulo: "Xbox Série S - 1TB (preto)",
  //   desconto: 3400,
  //   vendidos: 6500
  // },{
  //   urlImg: "../assets/fone-ouvido.jpg",
  //   valor: 230,
  //   titulo: "Edifier W800BT PLUS",
  //   desconto: 180,
  //   vendidos: 54
  // }, {
  //   urlImg: "../assets/echo.jpg",
  //   valor: 600,
  //   titulo: "Echo Show 5 (3ª geração)",
  //   desconto: 540,
  //   vendidos: 462
  // }];

}
