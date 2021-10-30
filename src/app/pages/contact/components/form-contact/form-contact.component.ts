import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { ContactServiceService } from '../../service/contact-service.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {


  subscribe?: Observer <any>;

  contactForm: FormGroup = new FormGroup ({
    name: new FormControl(null),
    email: new FormControl(null),
    message: new FormControl(null),
  })

  constructor(
    private readonly contactService: ContactServiceService,
  ) { }

  ngOnInit(): void {
  }

  onReset(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    this.subscribe = {
      next: () => {},
      error: () => {},
      complete: () => {}
    }

    const guest: GuestBook = this.contactForm.value;

    this.contactService
    .save(guest)
    .pipe(delay(1000))
    .subscribe(this.subscribe)
  }

}
