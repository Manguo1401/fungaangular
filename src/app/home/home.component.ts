import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var skrollr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    skrollr.init({
      render: function(data) {
        // Debugging here
      }
    });
  }


}
