import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  // constructor(private http: Http, private url) {
  //   this.url = 'http://localhost:3000/api/products';
  // }
  static url: string = 'http://localhost:3000/api/products';
  constructor(private http: Http) {
  }
  getProducts(): Observable<Product[]> {
    // return this.http.get('/api/products')
    //   .map(response => response.json());
    return this.http.get(ProductsService.url)
      .map(response => response.json());
  }

}
