import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock/stock.model'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocks:Stock[] = []
  stock:Stock = {
    name:'',
    symbol: '',
    currentPrice: 0,
    id: 0
  };
  mensaje: string = "Welcome to Stocks"

  constructor(private stockService: StockService,
    private route:ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe(payload => {
      this.stocks = payload;
    })
  }

  deleteStock(id:number) {
    this.stockService.delStock(id).subscribe(payload => {
      this.stocks = this.stocks.filter((stock) => {
        return stock.id != id
      })
    })
  }
  create():void {
    this.router.navigateByUrl(`/stocks/api/create`)
  };
}
