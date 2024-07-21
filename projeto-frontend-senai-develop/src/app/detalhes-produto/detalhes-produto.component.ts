import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Produto } from '../shared/interfaces/produto.interface';
import { ProdutoService } from '../shared/services/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.scss'
})
export class DetalhesProdutoComponent implements OnInit {

  produto?: Produto;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {}

  ngOnInit(): void {
    const produtoId = this.route.snapshot.paramMap.get('id') ?? '';
    this.produtoService.getProduto(produtoId).subscribe(produto => {
      this.produto = produto;
    })
    };

    formatDescricao(descricao: string): string {
      return descricao.replace(/\n/g, '<br>');
    }
  }

