import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showUser(){
    if (this.show) {
      this.show = false
    }else{
      this.show = true
    }
  }
}
