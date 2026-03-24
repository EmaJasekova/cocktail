import { Routes } from '@angular/router';
import { Body } from './body/body';
import { Alcoholic } from './alcoholic/alcoholic';
import { NonAlcoholic } from './non-alcoholic/non-alcoholic';
import { About } from './about/about';

export const routes: Routes = [
    // { "path": "",  component: Body },
    { "path": "", pathMatch: "full", redirectTo: "/home" },
    { "path": "home", component: Body },
    { "path": "about", component: About },
    { "path": "alcoholic", component: Alcoholic },
    { "path": "nonalcoholic", component: NonAlcoholic }
];
