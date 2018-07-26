import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public fixedNav;

  constructor(
    private router: Router
  ) {
    router.events.subscribe( (event) => {
      if ( event instanceof NavigationEnd && (event.url === '/accueil' || event.urlAfterRedirects === '/accueil')) {
        this.fixedNav = true;
      } else {
        this.fixedNav = false;
      }
    });
   }

  ngOnInit() {
  }

}
