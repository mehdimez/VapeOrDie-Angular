import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {Category} from '../category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<any>;
  product: Product;
  category: Category;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.product = new Product();
    this.products = this.productService.getProducts();
  }
  deleteProduct(idProduct: number) {
    this.productService.deleteProduct(idProduct).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error));
  }
  productDetails(id: number) {
    this.router.navigate(['detailProduct', id]);
  }
  updateProduct(id: number) {
    this.reloadData();
    this.router.navigate(['updateProduct', id]);
  }
}
