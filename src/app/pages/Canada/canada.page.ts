import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonNote,
} from '@ionic/angular/standalone';
import { WeatherService, CanadaSummary } from '../../services/weather.service';

@Component({
  selector: 'app-canada',
  standalone: true,
  templateUrl: './canada.page.html',
  styleUrls: ['./canada.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonNote,
  ],
})
export class CanadaPage implements OnInit {
  loading = true;
  data?: CanadaSummary;

  constructor(private weather: WeatherService) {}

  async ngOnInit() {
    const res = await this.weather.getNationalSummary();
    this.data = res.data;
    this.loading = false;
  }

  srcLabel(d: CanadaSummary) {
    return d.dataSource ?? d.source ?? '';
  }
  tsLabel(d: CanadaSummary) {
    return d.fetchedAt ?? d.downloadedAt ?? '';
  }
}
