import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models/interface-model';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id!: string;
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly blogService: BlogService) { }

  blog!: Blog;

  ngOnInit(): void {
    this.getForm();
  }

  getForm() {
    this.activatedRoute.params
    .pipe(
      map((param)=> param.id),
      delay(500),
      switchMap((id: string) => {
        if (!id) return EMPTY;
        else return  this.id = id, this.blogService.getById(id);
      })
    ).subscribe((blog: any) => {
      if (blog) {

      }
    }, console.error,
    () => console.log
    )
  }


  onReset() {}

}
