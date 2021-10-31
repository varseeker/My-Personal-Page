import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DonationsService } from 'src/app/dashboard/donations/service/donations.service';
import { Donation } from 'src/app/shared/models/interface-model';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  angka!: number;
  subscribe?: Observer<any>;

  donateForm: FormGroup = new FormGroup({
    donor: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required ,Validators.min(5000)]),
    message: new FormControl(null)
  })

  constructor(
    private readonly homeService: HomeService,
    private readonly donateService: DonationsService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  onSubmit(): void {
    const donate: Donation = this.donateForm.value;

    this.subscribe = {
      next: (data) => {console.log(data)},
      error: () => {},
      complete: () => {},
    }

    this.homeService
    .save(donate)
    .pipe(delay(1000))
    .subscribe(this.subscribe)
  }

  getAll(): void {
    this.subscribe = {
      next: (data) => {console.log(data)},
      error: () => {},
      complete: () => {},
    }

    this.donateService
    .getAll()
    .pipe(delay(2000))
    .subscribe
  }

  isValid(): boolean {
    if (this.donateForm.get('id')?.value) {
      return true;
    } else {
      return false;
    }
  }

  isFieldValid(fieldName: string): string {
    const control: AbstractControl = this.donateForm.get(
      fieldName
    ) as AbstractControl;

    if (control && control.touched && control.invalid) {
      return 'is-invalid';
    } else if (control && control.valid) {
      return 'is-valid';
    } else {
      return '';
    }
  }

  displayErrors(fieldName: string): string {
    const control: AbstractControl = this.donateForm.get(
      fieldName
    ) as AbstractControl;
    const messages: any = {
      required: 'Field Harus di isi',
      minlength: 'Field Minimal harus lebih panjang dari {minlength}',
    };

    if (control && control.errors) {
      const error = Object.values(control.errors).pop();
      const key: string = Object.keys(control.errors).pop() as string;

      let message = messages[key];

      console.log(message);

      if (key === 'minlength') {
        console.log(error);

        message = message.replace('{minlength}', error.requiredLength);
      }
      return message;
    } else {
      return '';
    }
  }

}
