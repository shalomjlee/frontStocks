import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockComponent } from './stock/stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { FormsModule} from '@angular/forms';
import { CreatestockComponent } from './createstock/createstock.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockComponent,
    EditStockComponent,
    CreatestockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
