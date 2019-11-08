import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idProduct: number;
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.product = new Product();
    this.idProduct = this.route.snapshot.params.id;
    this.productService.getProductById(this.idProduct).subscribe(data => {
      console.log(data);
      this.product = data;
    }, error => console.log(error));
  }
  goToList() {
    this.router.navigate(['products']);
  }
}
