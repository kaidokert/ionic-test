import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgZone } from "@angular/core";

declare let ble:any;

@Component({
  selector: 'page-home',
  //templateUrl: 'home.html'
  template:
  '<ion-header><ion-navbar><ion-title>Home</ion-title></ion-navbar></ion-header>'+
  '<ion-content padding><ion-list>' +
  '<ion-item *ngFor="let item of items">{{item}}</ion-item>' +
  '</ion-list></ion-content>'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController, private zone: NgZone) {
      console.log("woof");
      this.zone = zone;
  }

  logmsg(message: string) {
    this.zone.run(() => {
      this.items.push(message);
      console.log(message);
    });
  }

  ionViewWillEnter() {
    let that = this;
    ble.isEnabled(function() {
      that.logmsg('Bluetooth is enabled');
    },function() {
      that.logmsg('Bluetooth is *not* enabled');
    });
  }
}
