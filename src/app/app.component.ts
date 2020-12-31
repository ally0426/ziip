import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
=======
// import { Router } from '@angular/router';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateProvider } from './providers/translate/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateProvider,
    private translateService: TranslateService
    // public router: Router
  ) {
    this.appPages = [
      {
        title: 'Home Results',
        url: '/home-results',
        direct: 'root',
        icon: 'browsers'
      },
      {
        title: 'Home Location',
        url: '/home-location',
        direct: 'root',
        icon: 'browsers'
      },
      {
        title: 'Messages',
        url: '/messages',
        direct: 'forward',
        icon: 'mail'
      },
      {
        title: 'Properties',
        url: '/property-list',
        direct: 'forward',
        icon: 'home'
      },
      {
        title: 'Brokers',
        url: '/broker-list',
        direct: 'forward',
        icon: 'people'
      },
      {
        title: 'Nearby',
        url: '/nearby',
        direct: 'forward',
        icon: 'compass'
      },
      {
        title: 'By Category',
        url: '/bycategory',
        direct: 'forward',
        icon: 'albums'
      },
      {
        title: 'Invoices',
        url: '/invoices',
        direct: 'forward',
        icon: 'list-box'
      },
      {
        title: 'Favorites',
        url: '/favorites',
        direct: 'forward',
        icon: 'heart'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },
      {
        title: 'Support',
        url: '/support',
        direct: 'forward',
        icon: 'help-buoy'
      },
      {
        title: 'App Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      },
      {
        title: 'Walkthrough',
        url: '/',
        direct: 'root',
        icon: 'photos'
      },
      {
        title: 'Extras',
        url: '/extras',
        direct: 'forward',
        icon: 'paper'
      }
    ];

>>>>>>> d63a2ddcbd48ded45ae7ed7a702e2a3143fc1113
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
<<<<<<< HEAD
      this.splashScreen.hide();
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
=======
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
      // this.splashScreen.hide();
      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    }).catch(() => {
      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    });
  }

  closeMenu() {
    this.menu.close();
  }

  // goToEditProgile() {
  //   this.router.navigateByUrl('/edit-profile');
  // }

  // logout() {
  //   this.router.navigateByUrl('/login');
  // }
>>>>>>> d63a2ddcbd48ded45ae7ed7a702e2a3143fc1113
}
