
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mapdiv') mapDiv: ElementRef;
  map: any; service: any;
  lat: number; lon: 
  number; err: boolean = false; errmsg: string = ''; 
  keyText: string = '';
  radiusRange: string = '2000'; markers: any = [];
  constructor(public navCtrl: NavController, private geo: Geolocation) {
    this.geo.getCurrentPosition().then((pos) => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
      this.initMap();
    }).catch((error) => {
      this.errmsg = '無法取得GPS位置';
      this.err = true;
    });
  }
  initMap() {
    this.map = new google.maps.Map(this.mapDiv.nativeElement, {
      zoom: 17,
      center: { lat: this.lat, lng: this.lon }
    });
    let constr = '<p>臺南市永康區南台街1號</p>';
    let infowindow = new google.maps.InfoWindow({
      content: constr
    });
    let marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lon },
      map: this.map,
      title: '南臺科技大學'
    });
    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });
  }
  storeSearch() {
    if (this.markers.length != 0) {
      for (let i = 0; i < this.markers.length; i++)
        this.markers[i].setMap(null);
      this.markers = [];
    }
    this.service = new google.maps.places.PlacesService(this.map);
    this.service.nearbySearch(
      {
        location: { lat: this.lat, lng: this.lon },
        radius: this.radiusRange,
        keyword: this.keyText
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      }
    );
  }
  createMarker(place) {
    this.service.getDetails({
      placeId: place.place_id
    }, (placed, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        let marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location
        });
        let infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<div><strong>' + placed.name + '</strong><br>' +
            placed.formatted_address + '<br>' + placed.formatted_phone_number + '<br>' + placed.rating +
            '</div>');
          infowindow.open(this.map, this);
        });
        this.markers.push(marker);
      }
    });
  }
}