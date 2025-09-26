import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet, // ⬅ add this
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [
    IonTabs,
    IonRouterOutlet, // ⬅ add this
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    RouterLink,
  ],
})
export class TabsPage {}
