import { ContactFormService } from './../../services/contact-form.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
    private http: HttpClient,
    private contactFormService: ContactFormService
  ) { }

  submitContactForm(f) {
    if (f.valid) {
      this.contactFormService.sendContact(f.value).subscribe(() => console.log('message sent'));
    }
  }


}
