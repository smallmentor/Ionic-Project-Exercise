import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  account:string='';password:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public event:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }
  login() {
    this.event.publish('backData',{acc:this.account,pass:this.password});
    this.navCtrl.pop();
  }

}
