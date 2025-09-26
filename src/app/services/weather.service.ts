import { Injectable } from '@angular/core';

// inline model
export interface NationalWeatherSummary {
  source: string;
  downloadedAt: string;
  avgTempC: number;
  avgHumidityPct: number;
  conditions: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  async getNationalSummary(): Promise<{ data: NationalWeatherSummary }> {
    const res = await fetch('assets/data/canada_summary.json');
    const data = await res.json();
    return { data };
  }
}
