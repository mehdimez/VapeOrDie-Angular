import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {UpdateCategoryComponent} from './update-category/update-category.component';
import {CategoryDetailsComponent} from './category-details/category-details.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ClientComponent } from './client/client.component';
import { ProuditByCategoryComponent } from './proudit-by-category/proudit-by-category.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'categories', component: CategoryListComponent},
  {path: 'addCategory', component: CreateCategoryComponent},
  {path: 'updateCategory/:id', component: UpdateCategoryComponent},
  {path: 'detailCategory/:id', component: CategoryDetailsComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'detailProduct/:id', component: ProductDetailsComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent},
  {path: 'client', component: ClientComponent},
  {path: 'client/product/:id', component: ProuditByCategoryComponent},
  {path: 'admin', component: AdministrateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
