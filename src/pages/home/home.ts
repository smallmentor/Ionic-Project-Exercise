import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  Tab1Page:string = 'Tab1Page'
  Tab2Page:string = 'Tab2Page'

  constructor(public navCtrl: NavController) {     
  }
}
