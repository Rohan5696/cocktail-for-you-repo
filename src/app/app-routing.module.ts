import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CocktailMenuComponent } from './page/cocktail-menu/cocktail-menu.component';
import { IngredientComponent } from './page/ingredient/ingredient.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'cocktail/:id',
  component: CocktailMenuComponent
}, {
  path: 'ingredient/:id',
  component: IngredientComponent
}, {
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
