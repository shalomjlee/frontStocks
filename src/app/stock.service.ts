import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Stock } from './stock/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }


  getStock(id:number): Observable<any>{
    return this.http.get(`http://localhost:8082/api/stocks/${id}`)
  };

  getStocks(): Observable<any> {
    return this.http.get("http://localhost:8082/api/stocks")
  }

  delStock(id:number): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/stocks/${id}`)
  }

  updateStock(stock: Stock): Observable<any> {
      return this.http.patch(`http://localhost:8082/api/stocks/${stock.id}`, stock)
  }
  createStock(stock:Stock): Observable<any> {
  return this.http.post("http://localhost:8082/api/stocks", stock)    
  }
}
