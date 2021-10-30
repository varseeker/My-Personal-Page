import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donation, ServiceImpl } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService implements ServiceImpl<Donation> {
  
  constructor(
    private readonly http: HttpClient
  ){}

  storage!: Storage;
  subject!: Subject<boolean>;
  token!: string;
  donations: Donation[] = [];
  
  getAll(): Observable<Donation[]> {
    return this.http.get<Donation[]>('/api/donations');
  }
  getById(id: string): Observable<Donation> {
    return this.http.get<Donation>(`/api/donations/${id}`);
  }
  save(t: Donation, image?: File): Observable<any> {
    if (t.id) {
      return this.http.put<any>('/api/donations', t)
    } else {
      return this.http.post<any>('/api/donations', t)
    }
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`/api/donations/${id}`)
  }
  updateStorage(): void {
    this.storage.setItem('donations', JSON.stringify(this.donations));
    console.log(this.donations);
  }
  listUpdated(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
