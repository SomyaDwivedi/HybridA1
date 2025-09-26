import { Injectable } from '@angular/core';

export interface CanadaSummary {
  source?: string; // accept old key
  dataSource?: string; // or new key
  downloadedAt?: string; // old
  fetchedAt?: string; // new
  avgTempC: number;
  avgHumidityPct: number;
  conditions: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  async getNationalSummary(): Promise<{ data: CanadaSummary }> {
    const res = await fetch('assets/data/canadaData.json'); 
    const data = await res.json();
    return { data };
  }
}
