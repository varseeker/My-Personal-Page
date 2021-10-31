import { TestBed } from "@angular/core/testing";
import { Blog } from "src/app/shared/models/interface-model";
import { BlogService } from "./blog.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogComponent } from "../blog.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('BlogForm-AdminService', () => {

    let blogService: BlogService;
    let httpMock: HttpTestingController;
    let component: BlogComponent

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BlogComponent],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers: [BlogService]
        })
        blogService = TestBed.inject(BlogService)
        httpMock = TestBed.inject(HttpTestingController);
    })

    it('Blog service created', () => {
        expect(blogService).toBeDefined()
    })

    it('Blog service have a getAll() method', () => {
        expect(blogService.getAll).toBeDefined()
    })

    it('', () => {
        const url = '/api/blogs';
        const dummyBlog: Blog = {
            title: 'Judul',
            content: 'Konten',
            author: 'Author',
            url: 'Url'
        }
        
        blogService.save(dummyBlog)
            .subscribe((respone: Blog) => {
                expect(respone).toEqual(dummyBlog)
            })
            const request = httpMock.expectOne(url);
            expect(request.request.method).toBe('POST')
            expect(request.request.body).toEqual(dummyBlog)
    })
    
})