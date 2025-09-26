import { Injectable } from '@angular/core';

// inline models
export interface OntarioAqhiEntry {
  city: string;
  aqhi: number;
  category: 'Low' | 'Moderate' | 'High' | 'Very High';
}

export interface OntarioDatasetRecord {
  city: string;
  temperatureC: number;
  aqhi: number;
}

@Injectable({ providedIn: 'root' })
export class AqhiService {
  async getOntarioAqhi(): Promise<{
    source: string;
    downloadedAt: string;
    entries: OntarioAqhiEntry[];
  }> {
    const res = await fetch('assets/data/ontario_aqhi.json');
    return res.json();
  }

  async getOntarioDataset(): Promise<{
    source: string;
    downloadedAt: string;
    records: OntarioDatasetRecord[];
  }> {
    const res = await fetch('assets/data/ontario_dataset.json');
    return res.json();
  }
}
