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
} from '@ionic/angular/standalone';
import { AqhiService } from '../../services/aqhi.service';
import { OntarioAqhiComponent } from '../../components/ontario-aqhi/ontario-aqhi.component';
import { MessageService } from '../../services/message.service';

// ⬇️ Inline the interface here (remove any models import)
interface OntarioDatasetRecord {
  city: string;
  temperatureC: number;
  aqhi: number;
}

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
    OntarioAqhiComponent,
  ],
})
export class OntarioPage implements OnInit {
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
    this.datasetNote = ds.source;
    this.datasetTime = ds.downloadedAt;
    this.records = ds.records;
    this.incomingMessage = this.msg.getMessage();
  }

  openDetails(rec: OntarioDatasetRecord) {
    this.router.navigate(['/details'], { state: { record: rec } });
  }
}
