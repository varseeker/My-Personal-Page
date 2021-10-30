import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BlogService } from 'src/app/dashboard/blog/service/blog.service';
import { Blog } from 'src/app/shared/models/interface-model';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {

  blogs: Blog[] = [];
  subcribe?: Observer<any>;

  constructor(
    private readonly blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subcribe = {
      next: (blogs: Blog[]) => {
        this.blogs = blogs;
      },
      error: () => {},
      complete: () => {},
    }

    this.blogService
    .getAll()
    .pipe(delay(3000))
    .subscribe(this.subcribe)
  }

}
