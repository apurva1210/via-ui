import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SideNavService} from "../services/side-nav.service";
import {MatSidenav} from "@angular/material/sidenav";
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav | undefined;
  @Input() sidenavLayout:any;

  categoryArray: Array<any> = [];
  mobile: boolean = false;

  constructor(private sideNavService: SideNavService, private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    if (window.screen.width <= 400) {
      this.mobile = true;
    }

    if(this.sidenav != undefined){
      this.sideNavService.setSidenav(this.sidenav);
    }

    this.categoriesService.loadData().subscribe(value => {
      this.categoryArray = value;
    });
  }

}
