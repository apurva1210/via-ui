import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: Array<any> = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.loadData().subscribe(value => {
      this.categoryArray = value;
    });
  }

}
