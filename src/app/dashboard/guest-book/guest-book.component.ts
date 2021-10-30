import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.scss']
})
export class GuestBookComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showGuest(){
    if (this.show) {
      this.show = false
    }else{
      this.show = true
    }
  }

}
