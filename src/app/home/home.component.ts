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
        vendidos: 0,
        id: '',
        descricao: ''
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

  selecionado(produto: Produto) {
    this.router.navigate(['/detalhes'], { state: { produto } });
    }

}
