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
  }
  produtosFiltrados: any = this.produtosService.getProdutos();

  
  buscar(campoBusca: string) {

    if (campoBusca) {
      this.produtosFiltrados = this.produtos.filter(produto =>
        produto.titulo.toLowerCase().includes(campoBusca.toLowerCase()));
    } else {
      this.flag = true;
    }
  }
}
