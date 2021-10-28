import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  onLogOut(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login')
    setTimeout(() => {
      location.reload()
    }, 80);
  }

  isLoggedIn(): boolean{
    return sessionStorage.getItem('token') !== null;
  }

}
