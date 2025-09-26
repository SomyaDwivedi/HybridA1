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
  IonButton,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { OntarioAqhiComponent } from '../../components/ontarioAqhi/ontarioAqhi.component';
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
    IonButton,
    OntarioAqhiComponent,
  ],
})
export class DetailsPage implements OnInit {
  rec: { city: string; temperatureC: number; aqhi: number } | null = null;

  constructor(private router: Router, private msg: MessageService) {}

  ngOnInit() {
    this.rec = history.state?.record ?? null;
  }

  sendMessage() {
  
    const stamp = new Date().toLocaleTimeString();
    this.msg.setMessage(
      `Hello from Details for ${this.rec?.city ?? 'Ontario'} @ ${stamp}`
    );

    
    this.router.navigate(['/ontario']);
  }
}
