import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  onboardSlides = [];
  @ViewChild('mainSlides', { static: true}) slides: IonSlides

  constructor( private router: Router) {}

  ngOnInit(){
    this.onboardSlides = [
      {
        title: 'Mobile carwash and saloon',
        img: 'slide_1',
        desc: 'We bring best service your home'
      },
      {
        title: 'Saloon at your door-step',
        img: 'slide_2',
        desc: 'In our daily lives, We offer good time and good service to make better life'
      },
      {
        title:'Carwash at your door-step',
        img: 'slide_3',
        desc: 'We wash your car while you have goood time with your family at home'
      }
    ]
  }

  goBack(){
    this.slides.slidePrev();
  }
  skipBtn(){
    this.router.navigate(["/login"]); 
  }
  goNext(){
    this.slides.slideNext();
  }

}
