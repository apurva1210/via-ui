import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Output() sidenavLayoutToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openMenu = false;
  clickMenu() {
    this.openMenu = !this.openMenu;
    this.sidenavLayoutToggle.emit(this.openMenu);
  }

}
