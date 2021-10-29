import { Observable, Subject } from "rxjs";

export interface User {
  id?: string;
  username: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface GuestBook {
  id?: string;
  name: string;
  email: string;
  message?: string;
}

export interface Blog {
  id?: string;
  title: string;
  content: string;
  author: string;
  url: string;
}

export interface Donation {
  id?: string;
  donor: string;
  amount: number;
  message?: string;
}

export interface ServiceImpl<T> {
  readonly storage: Storage;
  subject: Subject<boolean>;
  token: string;

  getAll(): Observable<T[]>;
  getById(id: string): Observable<T>;
  save(t: T, image?:File): Observable<any>;
  delete(id: string): Observable<void>;
  listUpdated(): Observable<boolean>;

}

export interface Validation {
  isValid(): boolean;
  isFieldValid(fieldName: string): { [key: string]: boolean };
  displayErrors(fieldName:string):string;
}
