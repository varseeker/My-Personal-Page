import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Observer, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Donation } from 'src/app/shared/models/interface-model';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  angka!: number;
  subscribe?: Observer<any>;
  donations: Donation[] = [
    {
      donor: 'dono',
      amount: 100000,
      message: '',
    },
    {
      donor: 'kasin',
      amount: 197110,
      message: '',
    },
    {
      donor: 'indro',
      amount: 80120,
      message: '',
    }
  ];

  donateForm: FormGroup = new FormGroup({
    donor: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    amount: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    message: new FormControl(null, [Validators.required]),
  });

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.getAll();
    this.homeService.listUpdated().subscribe((updated: boolean) => {
      if (updated) {
        this.getAll();
      }
    });
  }

  onSubmit(): void {
    const donate: Donation = this.donateForm.value;

    this.subscribe = {
      next: (data) => {
        console.log(data);
      },
      error: () => {},
      complete: () => {},
    };

    this.homeService.save(donate).pipe(delay(1000)).subscribe(this.subscribe);
  }

  getAll(): void {
    this.subscribe = {
      next: (data: any) => {
        this.donations = data;
        console.log(data);
      },
      error: () => {},
      complete: () => {},
    };

    this.homeService.getAll().pipe(delay(2000)).subscribe;
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
      min: 'Field harus lebih besar dari {min} atau bilangan bulat',
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
      } else if (key == 'min') {
        console.log(error);

        message = message.replace('{min}', error.requiredLength);
      }
      return message;
    } else {
      return '';
    }
  }
}
