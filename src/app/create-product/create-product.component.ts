import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../category';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product();
  submitted = false;
  selectedCategory: Category;
  selectedFile: File;
  event1;
  imgUrl: any;
  recievedImageData: any;
  base64Data: any;
  convertImage: any;
  categoriesList: Observable<any>;

  constructor(private productService: ProductService, private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.productService.getCategoriesList().subscribe(data => this.categoriesList = data, error =>
      console.log(error));
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
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
  public onFileChange(event) {
    console.log(event);
    this.selectedFile = event.target.file;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.file);
    reader.onload = (event2) => {
      this.imgUrl = reader.result;
    };
  }
  }
