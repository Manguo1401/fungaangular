import { Component, OnInit } from '@angular/core';
import { fader } from './../animations/fader';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    fader
  ]
})
export class PresentationComponent implements OnInit {

  public aaron = 'inactive';
  public louis = 'inactive';

  constructor() { }

  ngOnInit() {
  }

}
