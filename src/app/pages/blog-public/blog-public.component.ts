import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/interface-model';
import { BlogService } from './service/blog.service';

@Component({
  selector: 'app-blog-public',
  templateUrl: './blog-public.component.html',
  styleUrls: ['./blog-public.component.scss']
})
export class BlogPublicComponent implements OnInit {

  subscriber?: Observer<any>;
  blogs: Blog[] = [];

  constructor(private readonly blogService: BlogService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.subscriber = {
      next: (blogs: Blog[]) => {
        this.blogs = blogs;
      },
      error: console.error,
      complete: () => {},
    };

    this.blogService.getAll()
    .pipe(delay(1000))
    .subscribe(this.subscriber)
  }
}
