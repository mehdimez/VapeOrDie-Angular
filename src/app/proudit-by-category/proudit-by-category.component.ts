import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-proudit-by-category',
  templateUrl: './proudit-by-category.component.html',
  styleUrls: ['./proudit-by-category.component.css']
})
export class ProuditByCategoryComponent implements OnInit {

  products: Observable<any>;
  category: Category;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData(this.route.snapshot.params.id);
  }
  reloadData(id: number) {
    this.products = this.productService.getProductByCategorieId(id);
  }

}
