import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅ add this
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
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-countryOverview',
  standalone: true,
  templateUrl: './countryOverview.page.html',
  styleUrls: ['./countryOverview.page.scss'],
  imports: [
    CommonModule, // ⬅ add this
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
export class CanadaSummaryPage implements OnInit {
  loading = true;
  data?: {
    source: string;
    downloadedAt: string;
    avgTempC: number;
    avgHumidityPct: number;
    conditions: string;
  };

  constructor(private weather: WeatherService) {}

  async ngOnInit() {
    const res = await this.weather.getNationalSummary();
    this.data = res.data;
    this.loading = false;
  }
}
