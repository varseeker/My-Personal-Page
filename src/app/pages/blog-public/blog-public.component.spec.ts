import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPublicComponent } from './blog-public.component';

describe('BlogPublicComponent', () => {
  let component: BlogPublicComponent;
  let fixture: ComponentFixture<BlogPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
