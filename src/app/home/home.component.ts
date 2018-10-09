import { slideOnScroll, ourServiceAnimation } from './../animations/SlideInOnScroll';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { Component, OnInit, AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';

declare var skrollr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideOnScroll,
    ourServiceAnimation
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = '';
  subtitle = '';
  realTitle = 'FUNGA, développeurs web fullstack';
  realSubtitle = 'Louis et Aaron créeront votre site selon vos envies';


  @ViewChild('ourServices') ourServicesEl: ElementRef;

  ourServicesState = 'hide';

  constructor( public el: ElementRef ) {}

  @HostListener('window:scroll', ['$event']) checkScroll() {
    const component = this.ourServicesEl.nativeElement;
    const componentOffset = component.offsetTop;
    const scrollPosition = window.pageYOffset;
    const activationHeight = component.clientHeight * 1.7;
    console.log(this.ourServicesState);

    if ( (scrollPosition + activationHeight >= componentOffset) ) {
      this.ourServicesState = 'show';
    }
  }

  ngOnInit() {
    this.title = this.randomniseString(this.realTitle, this.title);
    this.subtitle = this.randomniseString(this.realSubtitle, this.subtitle);
    const _this = this;
    const interval = window.setInterval(function() {
      _this.title = _this.randomniseString(_this.realTitle, _this.title);
      _this.subtitle = _this.randomniseString(_this.realSubtitle, _this.subtitle);
      if ( _this.title === _this.realTitle && _this.subtitle === _this.realSubtitle ) {
        clearInterval(interval);
      }
      console.log(_this.title.length);
    }, 50);
  }

  ngAfterViewInit() {
    skrollr.init({
      render: function(data) {
        // Debugging here
      }
    });

  }

  randomniseString(answerString, string) {

    const letters = 'abcdefghijklmnopqrstuvwxyzéèàç';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for ( let i = 0; i < answerString.length; i++) {
      if ( answerString[i] === string[i] || Math.floor(Math.random() * 20 ) === 1 ) {
        randomString += answerString[i];
      } else if ( letters.indexOf(answerString[i]) > -1 ) {
        randomString += letters.charAt(Math.floor(Math.random() * letters.length));
      } else if ( upperLetters.indexOf(answerString[i]) > -1 ) {
        randomString += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));
      } else {
        randomString += answerString[i];
      }
    }
    return randomString;
  }

}
