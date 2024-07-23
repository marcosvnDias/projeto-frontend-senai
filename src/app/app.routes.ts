import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscaProdutosComponent } from './busca-produtos/busca-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "busca",
        component: BuscaProdutosComponent
    },
    {
        path: "detalhes/:id",
        component: DetalhesProdutoComponent
    },
    {
        path: "carrinho",
        component: CarrinhoComponent
    },
];
