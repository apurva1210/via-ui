import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: Array<any> = [];
  mobile: boolean = false;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {

    if (window.screen.width <= 400) {
      this.mobile = true;
    }

    console.log(this.mobile)

    this.categoriesService.loadData().subscribe(value => {
      this.categoryArray = value;
    });
  }


}
