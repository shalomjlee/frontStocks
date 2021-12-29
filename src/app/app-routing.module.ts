import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { CreatestockComponent } from './createstock/createstock.component';

const routes: Routes = [
{path: "", component: StocksComponent},
{path: "stocks/:id", component: StockComponent},
{path: "stocks/:id/edit", component: EditStockComponent},
{path: "stocks/api/create", component: CreatestockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
