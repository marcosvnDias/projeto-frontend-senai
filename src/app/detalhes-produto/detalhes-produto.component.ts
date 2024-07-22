import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/interfaces/produto.interface';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.scss'
})
export class DetalhesProdutoComponent {

  produto?: Produto;

  constructor(private route: ActivatedRoute, private router: Router, private produtosService: ProdutosService) {
    let selecionado = this.router.getCurrentNavigation()?.extras.state;
    if (selecionado) {
      this.produto = this.produtosService.getProduto(selecionado?.['produto'].id);
    }
  }

  formatDescricao(descricao: string): string {
    return descricao.replace(/\n/g, '<br>');
  }

  adicionarCarrinho(produto: Produto) {
    //this.router.navigate(['/carinho'], { state: { produto } });

    //Receber - dentro do constructor em /carrinho (puxa por id):
    // constructor(private router: Router, private produtosService: ProdutosService) {
    //   let produtoAdicionado = this.router.getCurrentNavigation()?.extras.state;
    //   if (produtoAdicionado) {
    //     this.produto = this.produtosService.getProduto(selecionado?.['produto'].id);
    //   }
    // }
  }
}

