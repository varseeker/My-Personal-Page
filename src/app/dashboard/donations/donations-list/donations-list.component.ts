import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Donation } from 'src/app/shared/models/interface-model';
import { DonationsService } from '../service/donations.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss']
})
export class DonationsListComponent implements OnInit {
  total!: number;
  donations: Donation[] = [];
  // loading: boolean = false;
  subscriber?: Observer<any>;

  constructor(private readonly donationService:DonationsService) { }

  ngOnInit(): void {
    this.getAll()
    this.donationService.listUpdated().subscribe((updated: boolean) => {
      if (updated) {
        this.getAll();
      }
    });
  }

  getAll(){

    this.subscriber = {
      next: (data: any) => {
        this.donations = data,
        this.total = this.getTotal(data);
        console.log(data)
      },
      error: console.error,
      complete: () => {},
    };

    this.donationService.getAll().pipe(delay(500)).subscribe(this.subscriber)
  }

  onDelete(id: string){
    console.log(id);

    this.subscriber = {
      next: (user: Donation) => (console.log(user)),
      error: console.error,
      complete: () => { console.log},
    };

    this.donationService.delete(id).subscribe(this.subscriber);
  }

  getTotal(data: Donation[]): number{
    let total = 0;
    for (let nilai = 0; nilai < data.length; nilai++) {
        total += data[nilai].amount
    }
    return total;
  }
}
