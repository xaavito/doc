import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RankingPage } from '../ranking/ranking';


@Component({
  selector: 'page-ranks',
  templateUrl: 'rank.html'
})
export class RankPage {

  constructor(public navCtrl: NavController) {

  }
  pushPage(){
    this.navCtrl.push(RankingPage);
  }
}
