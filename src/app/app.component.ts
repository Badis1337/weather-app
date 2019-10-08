import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown=false;

  logout() {
    localStorage.clear();
  }

  getLocalStorage() {
    if(localStorage.length>0) {
      return 1;
    } else {
      return null ;
    }
  }

}
