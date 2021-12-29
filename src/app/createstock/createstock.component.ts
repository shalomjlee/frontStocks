import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock/stock.model'
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-createstock',
  templateUrl: './createstock.component.html',
  styleUrls: ['./createstock.component.scss']
})
export class CreatestockComponent implements OnInit {
  stock:Stock = {
    name:'h',
    symbol: '',
    currentPrice: 0,
    id: 0
  };

  constructor( private router: Router,
    private stockService: StockService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  onSubmit(formValues: NgForm){
    this.stockService.createStock(this.stock).subscribe();
    alert("Created a new stock!")
  }


  // create(): void{
  //   this.stockService.createStock(this.stock).subscribe(payload => { 
  //      console.log("updated", payload)
  //      alert("Created a new stock!")
  //   })
  // }
}
