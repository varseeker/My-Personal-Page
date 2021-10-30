import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name = sessionStorage.getItem('username')

  constructor() { }

  ngOnInit(): void {
  }

}
