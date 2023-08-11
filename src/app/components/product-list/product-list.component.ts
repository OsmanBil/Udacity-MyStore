import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  title: string = "Products";
  products: Product[] = [];

  ngOnInit(): void {
    fetch('./assets/data.json')
      .then((res: Response) => res.json())
      .then((jsonData: Product[]) => {
        this.products = jsonData;
      })
      .catch((error: Error) => {
        console.error("Failed to fetch the product data:", error);
      });
  }

  onProductAdded(product: Product): void {
    alert(`The product "${product.name}" has been added to the shopping cart.`);
  }
}
