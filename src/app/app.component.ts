import { Component } from '@angular/core';

/**
 * Basic Component
 */
@Component({
  selector: 'gc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Set the width of the side navigation
   * to 250px and the left margin of the
   * page content to 250px
   */
  public openNav() {
    document.getElementById('mySidenav').style.width = '100%';
    document.getElementById('main').style.marginRight = '100%';
  }

  /** Set the width of the side navigation
   *  to 0 and the left margin of the page
   *  content to 0
   */
  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
  }
}
