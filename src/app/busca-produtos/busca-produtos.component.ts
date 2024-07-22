import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { HeaderComponent } from '../header/header.component';
import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/interfaces/produto.interface';


@Component({
  selector: 'app-busca-produtos',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, HeaderComponent],
  templateUrl: './busca-produtos.component.html',
  styleUrl: './busca-produtos.component.scss'
})
export class BuscaProdutosComponent {

  campoBusca: string = '';
  flag: boolean = false;
  produtosFiltrados: any = [];

  constructor(private router: Router, private produtosService: ProdutosService) {
    let parametro = this.router.getCurrentNavigation()?.extras.state;
    if (parametro) {
      this.buscar(parametro?.['parametro']);
    }
  }

  buttonClicked(parametro: string) {
    this.flag = false;
    this.buscar(parametro);
  }

  buscar(campoBusca: string) {
    this.produtosFiltrados = this.produtosService.getProdutos().filter(produto =>
      produto.titulo.toLowerCase().includes(campoBusca.toLowerCase()));

    if (this.produtosFiltrados.length == 0) {
      this.flag = true;
    }
  }

  selecionado(produto: Produto) {
    this.router.navigate(['/detalhes'], { state: { produto } });
    }
}