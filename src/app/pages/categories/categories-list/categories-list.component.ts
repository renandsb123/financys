import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

    categories: Category[] = []


  ngOnInit(): void {
    console.log('->>>>' ,this.categories)

      this.categoryService.getAll().subscribe(
        (categories) => this.categories = categories,
        (error) => alert("Erroooooo ao carregar lista")
      )
      console.log('->>sss>>' ,this.categories)
  }

  // deleteCategory(category){
  //   this.categoryService.delete(category.id).subscribe(
  //     ()=> this.categories = this.categories.filter(element => element != category),
  //     ()=> alert("Erro ao tentar exclior ")
  //   )
  // }


     remover(){
        alert("tomar no seu cu ")
     }
}
