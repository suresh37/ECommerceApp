import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product";
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  constructor(private productService: ProductService) {
    console.log(productService.defProducts);
   this.products = productService.defProducts;
  }

  ngOnInit() {
      this.productService.findAll().subscribe(data => {
      this.products = data;
  });
  }
  selectProduct(product: Product): void
  {
    console.log("selected product: "+product)
    this.selectedProduct = product;
  }
}
