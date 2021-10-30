import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsFormComponent } from './donations-form.component';

describe('DonationsFormComponent', () => {
  let component: DonationsFormComponent;
  let fixture: ComponentFixture<DonationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
