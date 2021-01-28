import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage  {

  map: any;
  @ViewChild('map', { read: ElementRef, static:false }) mapRef: ElementRef;

  constructor() { }

  // ngOnInit() {
  //   this.showMap();
  // }

  ionViewDidEnter(){
    this.showMap()
  }

  showMap(){
    const location = new google.maps.LatLng(-26.270759299999998, 28.1122679);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

}
