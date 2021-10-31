import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BlogListComponent } from "./blog-list.component";

describe('BlogList-AdminComponent', () => {
    let fixture: ComponentFixture<BlogListComponent>
    let element: HTMLElement;
    let component: BlogListComponent;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BlogListComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(BlogListComponent)
        element = fixture.nativeElement;
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
    })
})