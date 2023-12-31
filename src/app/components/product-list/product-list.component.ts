import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  title: string = "Products";
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('./assets/data.json').subscribe(
      (jsonData: Product[]) => {
        this.products = jsonData;
      },
      (error: any) => {
        console.error("Failed to fetch the product data:", error);
      }
    );
  }

  onProductAdded(product: Product): void {
    alert(`The product "${product.name}" has been added to the shopping cart.`);
  }
}
