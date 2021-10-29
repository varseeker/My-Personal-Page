import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeYanuarComponent } from './resume-yanuar.component';

describe('ResumeYanuarComponent', () => {
  let component: ResumeYanuarComponent;
  let fixture: ComponentFixture<ResumeYanuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeYanuarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeYanuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
