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
<<<<<<< HEAD
    amount: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    message: new FormControl(null, [Validators.required]),
=======
    amount: new FormControl(null, [Validators.required]),
    message: new FormControl(null),
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
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
}
