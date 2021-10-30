import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  donations?: Donation[] = [
    {
      donor: 'hablum',
      amount: 60000,
      message: 'semangat bang'
    },
    {
      donor: 'minnan',
      amount: 98000,
      message: 'udah sholat belum bang?'
    },
    {
      donor: 'naaas',
      amount: 77000,
      message: 'makan bang'
    }
  ];

  donateForm: FormGroup = new FormGroup({
    donor: new FormControl(null),
    amount: new FormControl(null),
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

}
