import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { BlogService } from "../service/blog.service";
import { BlogFormComponent } from "./blog-form.component"
import { ActivatedRoute } from '@angular/router';
import { Blog } from "src/app/shared/models/interface-model";

describe('BlogFormComponent with DI', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [BlogService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const form = (title: string, author: string, content: string, url: string) => {
    component.blogForm.controls['title'].setValue(title);
    component.blogForm.controls['author'].setValue(author);
    component.blogForm.controls['content'].setValue(content);
    component.blogForm.controls['url'].setValue(url);
  };

  it('Component created ', ()=> {
    expect(component).toBeTruthy();
  })

  it('Component Form Initial State ', ()=> {
    expect(component.blogForm).toBeDefined();
    expect(component.blogForm.valid).toBeDefined();
    expect(component.blogForm.invalid).toBeDefined();
  })

  it('blogForm field validity ', ()=> {
    form('Example Satu', 'group5', 'contentnya', 'example-satu');
    const donate: Blog = {title: 'Example Satu',author:'group5', content:'contentnya', url:'example-satu'}
    expect(component.blogForm.value).toEqual(donate)
  })

  it('blogForm field validity ', ()=> {
    let error: any = {};
    let title: any = component.blogForm.controls['title'];
    expect(title.valid).toBeFalsy();

    error = title.errors || {};
    expect(error['required']).toBeTruthy();

    component.blogForm.get('author')?.setValue('')
    error = title.errors['required'] || {};
    expect(error).toBeTruthy();

  })

  it('Successfully submit from onSubmitTodo ', ()=> {
    const component = fixture.componentInstance
    const title = component.string_to_slug('Example Satu')
    fixture.detectChanges()
    expect(title).toBe('example-satu')
  })

});
