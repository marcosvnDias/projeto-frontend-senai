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
    const carrinho = sessionStorage.getItem('carrinho');
    let itensCarrinho = carrinho ? JSON.parse(carrinho) : [];

    const itemExistente = itensCarrinho.find((item: any) => item.id === produto.id);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      itensCarrinho.push({ ...produto, quantidade: 1 });
    }

    sessionStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
    alert('Produto adicionado ao carrinho!');
    this.router.navigate(['/carrinho']);
  }
}

