import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1root:string='Tab1Page';
  tab2root:string='Tab2Page';
  constructor(public navCtrl: NavController) {     
    
  }
  
  
}
