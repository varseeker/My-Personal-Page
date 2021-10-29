import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donation } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private readonly http: HttpClient
  ) { }

  private readonly storage: Storage = sessionStorage;
  private donations: Donation[] = [];
  private donationSubject: Subject<boolean> = new Subject <boolean>();

  public getAll(): Observable<Donation[]>{
    return this.http.get<Donation[]>('/api/donations')
  }

  public createOrUpdate(donation: Donation): Observable<Donation>{
    if (donation.id) {
      return this.http.put<Donation>('/api/donations', donation)
    } else {
      return this.http.post<Donation>('/api/donations', donation)
    }
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`/api/donations/${id}`)
  }

  public getById(id: string): Observable<Donation> {
    return this.http.get<Donation>(`/api/donations/${id}`)
  }
}
