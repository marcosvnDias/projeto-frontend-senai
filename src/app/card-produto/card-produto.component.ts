import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss'
})
export class CardProdutoComponent implements OnInit {
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
  modoSlide?: true

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
  
}
