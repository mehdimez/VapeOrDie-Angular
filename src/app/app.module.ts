import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {HttpClientModule} from '@angular/common/http';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ClientComponent } from './client/client.component';
import { ProuditByCategoryComponent } from './proudit-by-category/proudit-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UpdateCategoryComponent,
    UpdateProductComponent,
    AdministrateurComponent,
    ClientComponent,
    ProuditByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
