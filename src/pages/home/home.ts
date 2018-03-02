import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  school:string = '南台科技大學'
  name:string = '鍾小師'
  textColor:string = '#333'
  imgURL:string = 'mugShot.jpg'
  constructor(public navCtrl: NavController) {
    
  }

}
