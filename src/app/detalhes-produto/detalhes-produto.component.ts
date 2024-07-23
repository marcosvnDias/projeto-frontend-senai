import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/interfaces/produto.interface';
import { Comentario } from '../shared/interfaces/comentario.interface';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  produto?: Produto;
  comentarios: Comentario[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    const produtoId = this.route.snapshot.paramMap.get('id');
    if (produtoId) {
      this.produtosService.getProduto(produtoId).then((produto: Produto) => {
        this.produto = produto;
      }).catch((error: any) => {
        console.error('Erro ao carregar detalhes do produto:', error);
      });

      this.produtosService.getComentarios(produtoId).then((comentarios: Comentario[]) => {
        this.comentarios = comentarios;
      }).catch((error: any) => {
        console.error('Erro ao carregar comentários do produto:', error);
      });
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
