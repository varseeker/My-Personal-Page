import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeYazriComponent } from './resume-yazri.component';

describe('ResumeYazriComponent', () => {
  let component: ResumeYazriComponent;
  let fixture: ComponentFixture<ResumeYazriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeYazriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeYazriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
