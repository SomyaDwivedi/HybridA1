import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote
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
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote,
    OntarioAqhiComponent
  ]
})
export class DetailsPage implements OnInit {
  rec: any;

  constructor(private router: Router, private msg: MessageService) {}

  ngOnInit() {
    this.rec = history.state?.record ?? null; // 7b
  }

  sendMessage() {
    this.msg.setMessage('Hello from Details!'); // 7c
  }
}
