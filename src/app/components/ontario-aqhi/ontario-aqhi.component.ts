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
import { AqhiService } from '../../services/aqhi.service';

// ⬇️ Inline the interface here (do NOT import from models)
interface OntarioAqhiEntry {
  city: string;
  aqhi: number;
  category: 'Low' | 'Moderate' | 'High' | 'Very High';
}

@Component({
  selector: 'app-ontario-aqhi',
  standalone: true,
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
  templateUrl: './ontario-aqhi.component.html',
  styleUrls: ['./ontario-aqhi.component.scss'],
})
export class OntarioAqhiComponent implements OnInit {
  loading = true;
  source = '';
  downloadedAt = '';
  entries: OntarioAqhiEntry[] = [];

  constructor(private aqhi: AqhiService) {}

  async ngOnInit() {
    const data = await this.aqhi.getOntarioAqhi();
    this.source = data.source;
    this.downloadedAt = data.downloadedAt;
    this.entries = data.entries;
    this.loading = false;
  }
}
