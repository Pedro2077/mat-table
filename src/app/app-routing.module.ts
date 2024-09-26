import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/currency-table', pathMatch: 'full' },
  { path: 'currency-table', component: CurrencyTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
