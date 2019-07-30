import { Component } from '@angular/core';
import {Menu} from '../modele/menu-interface'
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  menus : Menu[] = [
                      {name:"Home", url:"home", icon:"home", page:"HomePage"},
                      {name:"Domaine", url:"domaine", icon:"briefcase", page:"DomainPage"},
                      {name:"Expert", url:"expert", icon:"people", page:"ExpertPage"},
                      {name:"Help", url:"help", icon:"help", page:"DomainPage"},
                      {name:"Sign-in", url:"sign", icon:"log-in", page:"SignPage"}
                    ];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
