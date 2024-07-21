import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  getProdutos() {
    return this.produtos;
  }

   produtos = [{
    urlImg: "../assets/geladeira.jpg",
    valor: 3450,
    titulo: "Geladeira Panasonic A+",
    desconto: 2380,
    vendidos: 21
  }, {
    urlImg: "../assets/kindle.jpg",
    valor: 1500,
    titulo: "Kindle 11ª Geração",
    desconto: 1200,
    vendidos: 5679
  },
  {
    urlImg: "../assets/xbox.jpg",
    valor: 4000,
    titulo: "Xbox Série S - 1TB (preto)",
    desconto: 3400,
    vendidos: 6500
  },{
    urlImg: "../assets/fone-ouvido.jpg",
    valor: 230,
    titulo: "Edifier W800BT PLUS",
    desconto: 180,
    vendidos: 54
  }, {
    urlImg: "../assets/echo.jpg",
    valor: 600,
    titulo: "Echo Show 5 (3ª geração)",
    desconto: 540,
    vendidos: 462
  }];
}
