import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
} from '@ionic/angular/standalone';
import { AqhiService, OntarioAqhiEntry } from '../../services/aqhi.service';

@Component({
  selector: 'app-ontario-aqhi',
  standalone: true,
  templateUrl: './ontarioAqhi.component.html',
  styleUrls: ['./ontarioAqhi.component.scss'],
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
  ],
})
export class OntarioAqhiComponent implements OnInit {
  loading = true;
  sourceLabel = '';
  timeLabel = '';
  entries: OntarioAqhiEntry[] = [];

  constructor(private aqhi: AqhiService) {}

  async ngOnInit() {
    const d = await this.aqhi.getOntarioAqhi();
    this.sourceLabel = (d.dataSource ?? d.source) || '';
    this.timeLabel = (d.fetchedAt ?? d.downloadedAt) || '';
    this.entries = d.entries;
    this.loading = false;
  }
}
