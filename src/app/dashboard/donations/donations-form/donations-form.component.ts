import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { Donation } from 'src/app/shared/models/interface-model';
import { DonationsService } from '../service/donations.service';

@Component({
  selector: 'app-donations-form',
  templateUrl: './donations-form.component.html',
  styleUrls: ['./donations-form.component.scss']
})
export class DonationsFormComponent implements OnInit {
  id!: string;  
  donateForm: FormGroup = new FormGroup({
    donor: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required, Validators.min(0)]),
    message: new FormControl(null, [Validators.required]),
  });
  donation?: Donation;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly donationService:DonationsService, private readonly router:Router) {}

  ngOnInit(): void {
    this.getForm();
  }

  getForm() {
    this.activatedRoute.params
    .pipe(
      map((param)=> param.id),
      delay(500),
      switchMap((id: string) => {
        if (!id) return EMPTY;
        else return  this.id = id, this.donationService.getById(id);
      })
    ).subscribe((donation: any) => {
      if (donation) {
        this.setFormValue(donation);
      }
    }, console.error,
    () => console.log
    )
  }

  setFormValue(donation: any){
    if (donation) {
      this.donateForm.addControl('id', new FormControl())
      this.donateForm.setValue({
        id: this.id,
        donor: donation.donor,
        amount: donation.amount,
        message: donation.message,
      });

    }
  }

  onSubmit() {
    const donation = this.donateForm.value;

    if (donation) {
      this.donationService.save(donation).pipe(
        delay(500),
      ).subscribe({
        next: (response: Donation) => console.log(response),
        error: console.error,
        complete: () => {}
      })
      this.router.navigateByUrl('/donate')
    }


  }

  onReset() {}

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
      required: 'Field is required here',
      email: 'Field format must be like this: example@example.com',
      min: 'Field must greater than {min} or an integer',
      minlength: 'Minimum field must greater than {minlength}'
    };

    if (control && control.errors) {
      const error = Object.values(control.errors).pop();
      const key: string = Object.keys(control.errors).pop() as string;

      let message = messages[key];

      console.log(message);

      if (key === 'minlength') {
        console.log(error);

        message = message.replace('{minlength}', error.requiredLength);
      }else if (key == 'min') {
        console.log(error);

        message = message.replace('{min}', error.requiredLength);
      }
      return message;
    } else {
      return '';
    }
  }
}
