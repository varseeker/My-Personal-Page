import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BlogListComponent } from "src/app/dashboard/blog/blog-list/blog-list.component";
import { BlogComponent } from "src/app/dashboard/blog/blog.component";
import { Blog } from "src/app/shared/models/interface-model";
import { BlogService } from "../../service/blog.service";

describe('ListBlogComponent()', () => {
    let component: BlogListComponent;
    let blogService: BlogService;
    let fixture: ComponentFixture<BlogListComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BlogListComponent],
        imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
        providers: [BlogService]
      }).compileComponents();
    })
  
    beforeEach(() => {
      fixture = TestBed.createComponent(BlogListComponent)
      blogService = TestBed.inject(BlogService);
      component = fixture.componentInstance;
      fixture.detectChanges
    })
  
    it('Component created', () => {
      expect(component).toBeTruthy();
    })
  
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
      component.ngOnInit();
      component.blogs = blogMock;
      expect(component.blogs).toEqual(blogMock);
    })  
});