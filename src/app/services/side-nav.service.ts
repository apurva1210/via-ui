import { Injectable } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() { }

  private sidenav: MatSidenav | undefined;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    if(this.sidenav != undefined){
      this.sidenav.opened = true;
      return this.sidenav.open();
    }
    return null;
  }

  public close() {
    if(this.sidenav != undefined){
      return this.sidenav.close();
    }
    return null;
  }

  public toggle() {
    if(this.sidenav != undefined){
      return this.sidenav.toggle();
    }
    return null;
  }
}
