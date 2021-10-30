import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { GuestbookService } from '../service/guestbook.service';

@Component({
  selector: 'app-guestbook-list',
  templateUrl: './guestbook-list.component.html',
  styleUrls: ['./guestbook-list.component.scss']
})
export class GuestbookListComponent implements OnInit {

  guestbooks: GuestBook[] = [];
  // loading: boolean = false;
  subscriber?: Observer<any>;

  constructor(private readonly guestBookService:GuestbookService) { }

  ngOnInit(): void {
    this.getAll()
    this.guestBookService.listUpdated().subscribe((updated: boolean) => {
      if (updated) {
        this.getAll();
      }
    });
  }

  getAll(){

    this.subscriber = {
      next: (data: any) => {this.guestbooks = data, console.log(data)},
      error: console.error,
      complete: () => {},
    };

    this.guestBookService.getAll().pipe(delay(500)).subscribe(this.subscriber)
  }

  onDelete(id: string){
    console.log(id);

    this.subscriber = {
      next: (user: GuestBook) => (console.log(user)),
      error: console.error,
      complete: () => { console.log},
    };

    this.guestBookService.delete(id).subscribe(this.subscriber);
  }
}
