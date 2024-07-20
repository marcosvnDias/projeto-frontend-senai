import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscaProdutosComponent } from './busca-produtos/busca-produtos.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "busca",
        component: BuscaProdutosComponent
    }
];
