import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAhsanComponent } from './resume-ahsan.component';

describe('ResumeAhsanComponent', () => {
  let component: ResumeAhsanComponent;
  let fixture: ComponentFixture<ResumeAhsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAhsanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAhsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
