import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showBlog(){
    if (this.show) {
      this.show = false
    }else{
      this.show = true
    }
  }

}
