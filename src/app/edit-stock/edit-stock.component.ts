import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock/stock.model'
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {
   stock:Stock = {
    name:'',
    symbol: '',
    currentPrice: 0,
    id: 0
  };

  constructor(
    private router: Router,
    private stockService: StockService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = +params['id'];
      this.stockService.getStock(myid).subscribe(payload => {
        this.stock = payload;

      })
    })
  }
  update(): void{
    this.stockService.updateStock(this.stock).subscribe(payload => { 
       alert("stock has been updated!")
    })
  }
}
