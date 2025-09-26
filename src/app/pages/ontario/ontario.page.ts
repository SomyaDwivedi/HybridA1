import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { AqhiService, OntarioDatasetRecord } from '../../services/aqhi.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-ontario',
  standalone: true,
  templateUrl: './ontario.page.html',
  styleUrls: ['./ontario.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class OntarioPage implements OnInit {
  records: OntarioDatasetRecord[] = [];
  datasetNote = '';
  datasetTime = '';
  incomingMessage = '';

  constructor(
    private aqhi: AqhiService,
    private router: Router,
    private msg: MessageService
  ) {}

  async ngOnInit() {
    const ds = await this.aqhi.getOntarioDataset();
    // use the exact keys defined by the service type
    this.datasetNote = ds.source;
    this.datasetTime = ds.downloadedAt;
    this.records = ds.records;

    // optional: show any message already set
    const peek = this.msg.getMessage();
    if (peek) this.incomingMessage = peek;
  }

  // fires whenever this tab becomes active
  ionViewWillEnter() {
    const m = this.msg.takeMessage();
    if (m) this.incomingMessage = m;
  }

  openDetails(rec: OntarioDatasetRecord) {
    this.router.navigate(['/details'], { state: { record: rec } });
  }
}
