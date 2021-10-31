import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Donation } from 'src/app/shared/models/interface-model';
import { HomeComponent } from './home.component';
import { HomeService } from './service/home.service';

describe('HomeComponent with DI', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [HomeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const form = (donor: string, amount: number, message: string) => {
    component.donateForm.controls['donor'].setValue(donor);
    component.donateForm.controls['amount'].setValue(amount);
    component.donateForm.controls['message'].setValue(message);
  };

  it('Component created ', ()=> {
    expect(component).toBeTruthy();
  })

  it('Component Form Initial State ', ()=> {
    expect(component.donateForm).toBeDefined();
    expect(component.donateForm.valid).toBeDefined();
    expect(component.donateForm.invalid).toBeDefined();
  })

  it('donateForm field validity ', ()=> {
    form('Dono',5000, 'hallo');
    const donate: Donation = {donor: 'Dono', amount: 5000 , message:'hallo'}
    expect(component.donateForm.value).toEqual(donate)
  })

  it('donateForm field validity ', ()=> {
    let error: any = {};
    let donor: any = component.donateForm.controls['donor'];
    expect(donor.valid).toBeFalsy();

    error = donor.errors || {};
    expect(error['required']).toBeTruthy();

    component.donateForm.get('amount')?.setValue(100)
    error = donor.errors['min'] || {};
    expect(error).toBeTruthy();

  })

  it('Successfully submit from onSubmitTodo ', ()=> {
    component.donateForm.value.donor = 'Dono';
    component.onSubmit();
  })

});
