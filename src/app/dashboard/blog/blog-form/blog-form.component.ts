import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { Blog, ServiceImpl } from 'src/app/shared/models/interface-model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  id!: string;
  username = sessionStorage.getItem('username');

  blogForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    author: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    url: new FormControl('')
  });

  constructor(
    private readonly activatedRoute: ActivatedRoute, 
    private readonly blogService:BlogService, 
    private readonly router:Router) { }
  
  ngOnInit(): void {
    this.getForm()
  }

  OnSubmit(): void {
    this.blogForm.get('url')?.setValue(this.blogForm.get('title')?.value)

    const blog: Blog = this.blogForm.value;
    console.log(blog);
    

    if (blog) {
      blog.url = this.string_to_slug(blog.title);
      this.blogService.save(blog).pipe(
        delay(500),
      ).subscribe({
        next: (response: Blog) => console.log(response),
        error: console.error,
        complete: () => {}
      })

      this.router.navigateByUrl('/blog')
    }
  }

  string_to_slug (str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

  setFormValue(blog: Blog): void {
    if (blog) {
      this.blogForm.addControl('id', new FormControl());
      this.blogForm.setValue({
        id: this.id,
        title: blog.title,
        author: blog.author,
        content: blog.content,
        url: this.string_to_slug(blog.title)
      });
    }
  }

  getForm(){
    this.activatedRoute.params
    .pipe(
      map((params) => params.id),
      delay(500),
      switchMap((id: string) => {
        if (!id) return EMPTY;
        else return this.id = id, this.blogService.getById(id)
      })
    )
    .subscribe(
      (blog: Blog) => {
        if (blog) {
          this.setFormValue(blog)
        }
      }
    ),
    console.error
  } 

}
