import { Routes } from '@angular/router';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'produto/:id',
        component: DetalhesProdutoComponent
    }
];
