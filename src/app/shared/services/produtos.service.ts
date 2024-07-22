import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  //Método original (busca-produto e /home)
  getProdutos() {
    return this.produtos;
  }

  //Método mantido
  getProduto(id: string): Observable<Produto>{
    const produto = this.produtos.find(produto => produto.id === id);
    return of(produto!);
  }

  //Mock atualizado
  private produtos: Produto[] = [{
    id: "1",
    urlImg: "../assets/geladeira.jpg",
    valor: 3450,
    titulo: "Geladeira Panasonic A+",
    desconto: 2380,
    vendidos: 21,
    descricao: `Design moderno e elegante, além disso, é econômico, espaçoso e possui diversas funcionalidades para o seu dia-a-dia.
Vitamin Power: Faz com que os nutrientes naturais de seus legumes e verduras sejam preservados devido a iluminação de LED especial sobre o gavetão de hortifrúti.
Inverter: Reduz em até 43% o consumo de energia, pois regula o compressor de acordo com a temperatura que varia com o abre e fecha da porta e com a quantidade de comida interna.
Frost Free: Sistema que trabalha com a circulação forçada de ar frio, a refrigeração é mais rápida e homogênea, acelerando o congelamento. Não existe a formação de gelo, por isso, o degelo não é necessário.`
  }, {
    id: "2",
    urlImg: "../assets/kindle.jpg",
    valor: 1500,
    titulo: "Kindle 11ª Geração",
    desconto: 1200,
    vendidos: 5679,
    descricao:
      `O Kindle mais leve e compacto, agora com tela de 300 ppi de alta resolução para textos e imagens nítidos.
Agora com bateria com duração estendida, uma única carga por USB-C dura até 6 semanas.
Agora com 16 GB para você armazenar milhares de livros, o dobro de capacidade de armazenamento da geração anterior.`
  },
  {
    id: "3",
    urlImg: "../assets/xbox.jpg",
    valor: 4000,
    titulo: "Xbox Série S - 1TB (preto)",
    desconto: 3400,
    vendidos: 6500,
    descricao: `Desfrute de velocidade e desempenho de nova geração com o Xbox Series S em preto carvão, que inclui uma unidade SSD de 1 TB.
Xbox A Velocity Architecture, impulsionada por um SSD personalizado, funciona em conjunto com a inovadora tecnologia de sistema num chip (SOC) para oferecer uma jogabilidade de até 120 FPS.`
  }, {
    id: "4",
    urlImg: "../assets/fone-ouvido.jpg",
    valor: 230,
    titulo: "Edifier W800BT PLUS",
    desconto: 180,
    vendidos: 54,
    descricao: `Experimente som dinâmico com grave poderoso: experimente som claro, detalhado e poderoso com a excelente resolução dos drivers de 40 mm.
Até 30 horas de duração da bateria.
Conexão dupla: Conecte -se com dois dispositivos Bluetooth simultaneamente, alternando sem esforço entre trabalho e entretenimento.`
  }, {
    id: "5",
    urlImg: "../assets/echo.jpg",
    valor: 600,
    titulo: "Echo Show 5 (3ª geração)",
    desconto: 540,
    vendidos: 462,
    descricao: `Faça mais com Alexa: Use sua voz para criar alarmes e timers, dormir profundamente ao som de uma playlist relaxante, começar seu dia com uma rotina de casa inteligente, ver seu calendário e saber a previsão do tempo.
Tamanho compacto, som mais potente: Assista a filmes e séries, e ouça músicas, podcasts e muito mais no Amazon Music, Spotify, Prime Video e outros. Tudo isso com um som grave mais potente e vocais mais nítidos.
Com o display de 5,5” você pode ver vídeos, filmes, séries, nomes das músicas e muito mais.`
  }];
}





// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Produto } from '../interfaces/produto.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProdutosService {

//   private produtos: Produto[] = [{
//     id: "1",
//     urlImg: "../assets/geladeira.jpg",
//     valor: 3450,
//     titulo: "Geladeira Panasonic A+",
//     desconto: 2380,
//     vendidos: 21,
//     descricao: `Design moderno e elegante, além disso, é econômico, espaçoso e possui diversas funcionalidades para o seu dia-a-dia.
// Vitamin Power: Faz com que os nutrientes naturais de seus legumes e verduras sejam preservados devido a iluminação de LED especial sobre o gavetão de hortifrúti.
// Inverter: Reduz em até 43% o consumo de energia, pois regula o compressor de acordo com a temperatura que varia com o abre e fecha da porta e com a quantidade de comida interna.
// Frost Free: Sistema que trabalha com a circulação forçada de ar frio, a refrigeração é mais rápida e homogênea, acelerando o congelamento. Não existe a formação de gelo, por isso, o degelo não é necessário.`
//   }, {
//     id: "2",
//     urlImg: "../assets/kindle.jpg",
//     valor: 1500,
//     titulo: "Kindle 11ª Geração",
//     desconto: 1200,
//     vendidos: 5679,
//     descricao: 
//     `O Kindle mais leve e compacto, agora com tela de 300 ppi de alta resolução para textos e imagens nítidos.
// Agora com bateria com duração estendida, uma única carga por USB-C dura até 6 semanas.
// Agora com 16 GB para você armazenar milhares de livros, o dobro de capacidade de armazenamento da geração anterior.`
//   },
//   {
//     id: "3",
//     urlImg: "../assets/xbox.jpg",
//     valor: 4000,
//     titulo: "Xbox Série S - 1TB (preto)",
//     desconto: 3400,
//     vendidos: 6500,
//     descricao: `Desfrute de velocidade e desempenho de nova geração com o Xbox Series S em preto carvão, que inclui uma unidade SSD de 1 TB.
// Xbox A Velocity Architecture, impulsionada por um SSD personalizado, funciona em conjunto com a inovadora tecnologia de sistema num chip (SOC) para oferecer uma jogabilidade de até 120 FPS.`
//   },{
//     id: "4",
//     urlImg: "../assets/fone-ouvido.jpg",
//     valor: 230,
//     titulo: "Edifier W800BT PLUS",
//     desconto: 180,
//     vendidos: 54,
//     descricao: `Experimente som dinâmico com grave poderoso: experimente som claro, detalhado e poderoso com a excelente resolução dos drivers de 40 mm.
// Até 30 horas de duração da bateria.
// Conexão dupla: Conecte -se com dois dispositivos Bluetooth simultaneamente, alternando sem esforço entre trabalho e entretenimento.`
//   }, {
//     id: "5",
//     urlImg: "../assets/echo.jpg",
//     valor: 600,
//     titulo: "Echo Show 5 (3ª geração)",
//     desconto: 540,
//     vendidos: 462,
//     descricao: `Faça mais com Alexa: Use sua voz para criar alarmes e timers, dormir profundamente ao som de uma playlist relaxante, começar seu dia com uma rotina de casa inteligente, ver seu calendário e saber a previsão do tempo.
// Tamanho compacto, som mais potente: Assista a filmes e séries, e ouça músicas, podcasts e muito mais no Amazon Music, Spotify, Prime Video e outros. Tudo isso com um som grave mais potente e vocais mais nítidos.
// Com o display de 5,5” você pode ver vídeos, filmes, séries, nomes das músicas e muito mais.`
//   }];

//   constructor() {}

//   getProdutos(): Observable<Produto[]> {
//     return of(this.produtos);
//   }

//   getProduto(id: string): Observable<Produto>{
//     const produto = this.produtos.find(produto => produto.id === id);
//     return of(produto!);
//   }
// }