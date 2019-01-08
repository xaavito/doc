import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RankPage } from '../rank/rank';
import { RankingPage } from '../ranking/ranking';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RankPage;
  tab3Root = RankingPage;

  constructor() {

  }
}
