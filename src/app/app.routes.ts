import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Alcoholic } from './alcoholic/alcoholic';
import { NonAlcoholic } from './non-alcoholic/non-alcoholic';
import { About } from './about/about';

export const routes: Routes = [
    { "path": "", pathMatch: "full", redirectTo: "/home" },
    { "path": "home", component: Home },
    { "path": "about", component: About },
    { "path": "alcoholic", component: Alcoholic },
    { "path": "nonalcoholic", component: NonAlcoholic }
];
