import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Blog } from "src/app/shared/models/interface-model";
import { BlogPublicComponent } from "./blog-public.component";
import { BlogService } from "./service/blog.service";

describe('ContactComponent()', () => {
  let element: HTMLElement;
  let fixture: ComponentFixture<BlogPublicComponent>;
  let component: BlogPublicComponent;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogPublicComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [BlogService]
    }).compileComponents();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPublicComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(BlogPublicComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debug = fixture.debugElement;
  });

  it('Should Create the BlogPublicComponent', () => {
    fixture = TestBed.createComponent(BlogPublicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should have <app-header></app-header>', () => {
    const appHeader = element.querySelector('app-header');
    expect(appHeader).toBeTruthy();
  });

  it('Should have <app-footer></app-footer>', () => {
    const appFooter = element.querySelector('app-footer');
    expect(appFooter).toBeTruthy();
  });

  it('Should have <app-form-contact></app-form-contact>', () => {
    const appForm = element.querySelector('app-form-contact');
    expect(appForm).toBeTruthy();
  });

  it('Should have div', () => {
    const div = element.querySelector('div');
    expect(div).toBeTruthy();
  });

  it('Should showing blogs', () => {
    const blogMock: Blog[] = [
      {
        id: "1",
        title: 'hari minggu',
        content: 'minggu pagi',
        author: 'group6',
        url: 'hari-minggu'
      }
    ]
    component.getAll();
    component.blogs = blogMock;
    expect(component.blogs).toEqual(blogMock);
  })
});