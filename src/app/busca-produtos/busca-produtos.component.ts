import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../card-produto/card-produto.component';

@Component({
  selector: 'app-busca-produtos',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent],
  templateUrl: './busca-produtos.component.html',
  styleUrl: './busca-produtos.component.scss'
})
export class BuscaProdutosComponent {

  produtos = this.produtosService.getProdutos();
  campoBusca: string = '';
  flag: boolean = false;

  constructor(private router: Router, private produtosService: ProdutosService) {
    let parametro = this.router.getCurrentNavigation()?.extras.state;
    if (parametro) {
      this.buscar(parametro?.['parametro']);
    }
  }
  produtosFiltrados: any = [];


  buscar(campoBusca: string) {
    this.produtosFiltrados = this.produtos.filter(produto =>
      produto.titulo.toLowerCase().includes(campoBusca.toLowerCase()));
    if (this.produtosFiltrados.length == 0) {
      this.flag = true;
    }

  }
}