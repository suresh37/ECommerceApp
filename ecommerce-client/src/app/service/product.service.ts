import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl: string;
  defProducts: Product[] = [{
    productId: 1,
    name: "iphone 11",
    desc: "iphone 11",
    image: "",
    url: "",
    price: 90000,
    category: "mobile"
  },
  {
    productId: 2,
    name: "one plus 7t",
    desc: "OP 7T",
    image: "",
    url: "",
    price: 37000,
    category: "mobile"
  },
  {
    productId: 3,
    name: "ASUS ROG Phone 2",
    desc: "ASUS ROG Phone II",
    image: "",
    url: "",
    price: 40000,
    category: "mobile"
  }
  ];
  constructor(private http: HttpClient) {
    //this.usersUrl = 'http://localhost:8080/products';
    this.productsUrl = 'https://8080-b2a3aa64-8f85-4105-a6c0-4cbcded98460.ws-ap0.gitpod.io/products';
  }
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  public save(product: Product) {
    return this.http.post<Product>(this.productsUrl, product);
  }
}
