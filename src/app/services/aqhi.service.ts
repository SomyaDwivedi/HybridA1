import { Injectable } from '@angular/core';

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
    source?: string;
    dataSource?: string;
    downloadedAt?: string;
    fetchedAt?: string;
    entries: OntarioAqhiEntry[];
  }> {
    const res = await fetch('assets/data/ontarioAqhiData.json');
    return res.json();
  }

  async getOntarioDataset(): Promise<{
    source?: string;
    dataSource?: string;
    downloadedAt?: string;
    fetchedAt?: string;
    records: OntarioDatasetRecord[];
  }> {
    const res = await fetch('assets/data/dataset.json');
    return res.json();
  }
}
