import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
} from '@ionic/angular/standalone';
import { AqhiService, OntarioDatasetRecord } from '../../services/aqhi.service';
import { OntarioAqhiComponent } from '../../components/ontarioAqhi/ontarioAqhi.component';
import { MessageService } from '../../services/message.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-ontario',
  standalone: true,
  templateUrl: './ontario.page.html',
  styleUrls: ['./ontario.page.scss'],
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    OntarioAqhiComponent,
  ],
})
export class OntarioPage implements OnInit, ViewWillEnter {
  datasetNote = '';
  datasetTime = '';
  records: OntarioDatasetRecord[] = [];
  incomingMessage = '';

  constructor(
    private aqhi: AqhiService,
    private router: Router,
    private msg: MessageService
  ) {}

  async ngOnInit() {
    const ds = await this.aqhi.getOntarioDataset();
    this.datasetNote = (ds.dataSource ?? ds.source) || '';
    this.datasetTime = (ds.fetchedAt ?? ds.downloadedAt) || '';
    this.records = ds.records;
  }

  ionViewWillEnter() {
    this.incomingMessage = this.msg.getMessage();
    this.msg.clear();
  }

  openDetails(rec: OntarioDatasetRecord) {
    this.router.navigate(['/details'], { state: { record: rec } });
  }
}
