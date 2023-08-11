import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  title: string = "Products";
  products: Product[] = [];

  ngOnInit(): void {
    fetch('./assets/data.json').then(res => res.json())
    .then(jsonData => {
      this.products = jsonData;
    });
  }

  onProductAdded(product: Product): void {
   
      alert(`Das Produkt "${product.name}" wurde zum Warenkorb hinzugefügt.`);

  }
  
  
  

}
