import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from './stock.model'


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input() stock: Stock = {
    name:'',
    symbol: '',
    currentPrice: 0,
    id: 0
  }
  @Input() message: string = ""


  // stock:Stock = {
  //   name:'',
  //   symbol: '',
  //   currentPrice: 0,
  //   id: 0
  // };
  constructor(private route:ActivatedRoute, 
    private stockService: StockService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      const myId= +params['id'];

      console.log('my id is', myId + 5)
      this.stockService.getStock(myId).subscribe(payload => {
        this.stock = payload;
      })
    })
  }

  edit():void {
    this.router.navigateByUrl(`/stocks/${this.stock.id}/edit`)
  };
}
