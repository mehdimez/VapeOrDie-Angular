import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  id: number;
  category: Category;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.category = new Category();
    this.id = this.route.snapshot.params.id;
    this.categoryService.getCategory(this.id).subscribe(data => {
        this.category = data;
        console.log(data);
      },
      error1 => console.log(error1));
  }

  updateCategory() {
    this.categoryService.updateCategory(this.id, this.category).subscribe(data => console.log(data), error1 => console.log(error1));
    this.category = new Category();
    this.goToList();
  }

  onSubmit() {
    this.updateCategory();
  }

  goToList() {
    this.router.navigate(['/categories']);
  }
}
