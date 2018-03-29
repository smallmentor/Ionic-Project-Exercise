import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  account:string=''; password:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public event:Events) {
    this.event.subscribe('backData',(indata)=>{
      this.account=indata.acc;
      this.password=indata.pass;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }
  login() {
    this.navCtrl.push('Tab2Page',{acc:this.account,pass:this.password});
  }

}
