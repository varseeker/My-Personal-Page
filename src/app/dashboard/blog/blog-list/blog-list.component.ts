import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/interface-model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

 blogs:Blog[] = [];
  // loading: boolean = false;
  subscriber?: Observer<any>;

  constructor(private readonly blogService:BlogService) { }

  ngOnInit(): void {
    this.getAll()
    this.blogService.listUpdated().subscribe((updated: boolean) => {
      if (updated) {
        this.getAll();
      }
    });
  }

  getAll(){

    this.subscriber = {
      next: (data: any) => {this.blogs = data, console.log(data)},
      error: console.error,
      complete: () => {},
    };

    this.blogService.getAll().pipe(delay(500)).subscribe(this.subscriber)
  }

  onDelete(id: string){
    console.log(id);

    this.subscriber = {
      next: (BlogBlog:Blog) => (console.log(BlogBlog)),
      error: console.error,
      complete: () => { console.log},
    };

    this.blogService.delete(id).subscribe(this.subscriber);
  }
}
