import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { GuestBook, ServiceImpl } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements ServiceImpl<GuestBook>{
  storage!: Storage;
  subject!: Subject<boolean>;
  token!: string;
  guestbook?: GuestBook;

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(): Observable<GuestBook[]> {
    return this.http.get<GuestBook[]> ('/api/guest-book');
  }
  getById(id: number): Observable<GuestBook> {
    return this.http.get<GuestBook>(`/api/guest-book/${id}`);
  }
  save(t: GuestBook, image?: File): Observable<any> {
    if (t.id) {
      return this.http.put<any>('/api/donations', t)
    } else {
      return this.http.post<any>('/api/donations', t)
    }
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/donations/${id}`)
  }
  updateStorage(): void {
    this.storage.setItem('donations', JSON.stringify(this.guestbook));
    console.log(this.guestbook);
  }
  listUpdated(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
