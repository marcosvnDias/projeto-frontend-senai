import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss'
})
export class CardProdutoComponent implements OnInit {

  @Input()
  id!: string;

  @Input()
  urlImg!: string;

  @Input()
  valor!: number;

  @Input()
  titulo!: string;

  @Input()
  focus?: boolean;

  @Input()
  promocao?: boolean;

  @Input()
  valorPromocao?: number;

  @Input()
  modoSlide?: true;

  @Input()
  descricao!: string

  status = "box-produto";
  ngOnInit(): void {
    if (this.modoSlide) {
      this.status = "modoSlide";
    }

    if (this.focus) {
      this.status += " focus";
    }

    if (this.promocao) {
      this.status += " promocao";
    }
  }

  constructor(private router: Router) {}
  
}
