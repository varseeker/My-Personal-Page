import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BlogComponent } from "./blog.component";


describe('Blog Module Unit Test', ()=> {
  let fixture: ComponentFixture<BlogComponent>
  let element: HTMLElement;
  let component: BlogComponent;
  let debugElement: DebugElement;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(BlogComponent)
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('Should create the BlogComponent', ()=>{
    fixture = TestBed.createComponent(BlogComponent)
    const Blog = fixture.componentInstance;
    expect(Blog).toBeTruthy();
  })

  it('BlogComponet Should return show true when created', ()=>{
    fixture = TestBed.createComponent(BlogComponent)
    const Blog = fixture.componentInstance;
    expect(Blog.show).toBeTruthy();
  })

  it('BlogComponet Should return show true after showBlog(), when init show is false', ()=>{
    fixture = TestBed.createComponent(BlogComponent)
    const Blog = fixture.componentInstance;
    Blog.show = false;
    Blog.showBlog()
    fixture.detectChanges();
    expect(Blog.show).toBeTruthy();
  })

  it('BlogComponet Should return show false after showBlog(), when init show is true', ()=>{
    fixture = TestBed.createComponent(BlogComponent)
    const Blog = fixture.componentInstance;
    Blog.show = true;
    Blog.showBlog()
    fixture.detectChanges();
    expect(Blog.show).toBeFalsy();
  })
})
