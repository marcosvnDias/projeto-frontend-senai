import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/interfaces/produto.interface';



@Component({
  selector: 'app-busca-produtos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardProdutoComponent],
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.scss']
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

  buttonClicked(event: Event) {
    const parametro = (event.target as HTMLInputElement).value;
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