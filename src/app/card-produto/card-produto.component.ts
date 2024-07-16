import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss'
})
export class CardProdutoComponent {
  @Input()
  urlImg!: string;

  @Input()
  valor!: number;

  @Input()
  titulo!: string;
}
