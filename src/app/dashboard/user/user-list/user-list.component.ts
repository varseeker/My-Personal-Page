import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/shared/models/interface-model';
import { DataTablesResponse } from '../models/data';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  // loading: boolean = false;
  subscriber?: Observer<any>;

  constructor(private readonly userService:UserService) { }


  ngOnInit(): void {
    this.getAll()
    this.userService.listUpdated().subscribe((updated: boolean) => {
      if (updated) {
        this.getAll();
      }
    });
  }

  getAll(){

    this.subscriber = {
      next: (data: any) => {this.users = data, console.log(data)},
      error: console.error,
      complete: () => {},
    };

    this.userService.getAll().pipe(delay(500)).subscribe(this.subscriber)
  }

  onDelete(id: string){
    console.log(id);

    this.subscriber = {
      next: (user: User) => (console.log(user)),
      error: console.error,
      complete: () => { console.log},
    };

    this.userService.delete(id).subscribe(this.subscriber);
  }
}
