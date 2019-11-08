import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
  }

  newCategory(): void {
    this.submitted = false;
    this.category = new Category();
  }

  save() {
    this.categoryService.createCategory(this.category).subscribe(data => console.log(data), error1 => console.log(error1));
    this.category = new Category();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.categoryService.getCategoriesList();
    this.router.navigate(['/categories']);
  }
}
