import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product();
  submitted = false;
  selectedCategory: Category;
  categoriesList: Observable<any>;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.productService.getCategoriesList().subscribe(data => this.categoriesList = data, error =>
      console.log(error));
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.productService.createProduct(this.product, this.product.Productcategory.idCategory)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.goToList();
  }

  goToList() {
    this.router.navigate(['/products']);
    this.productService.getProducts();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
