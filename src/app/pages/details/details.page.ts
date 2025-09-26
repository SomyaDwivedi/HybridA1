import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonNote,
} from '@ionic/angular/standalone';
import { OntarioAqhiComponent } from '../../components/ontario-aqhi/ontario-aqhi.component';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonNote,
    OntarioAqhiComponent,
  ],
})
export class DetailsPage implements OnInit {
  rec: any;

  constructor(private router: Router, private msg: MessageService) {}

  ngOnInit() {
    this.rec = history.state?.record ?? null; // first load
  }

  // 🔁 runs whenever you navigate back to this page
  ionViewWillEnter() {
    const fresh = history.state?.record;
    if (fresh) this.rec = fresh;
  }

  sendMessage() {
    const city = this.rec?.city ?? 'Ontario';
    this.msg.setMessage(`${city} say's Hi !`);
    this.router.navigate(['/ontario']);
  }
}
