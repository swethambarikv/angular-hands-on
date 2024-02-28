import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template Driven Forms';

  @ViewChild('contactForm') contactForm!: NgForm;

  contact: Contact = {
    firstname: '',
    lastname: '',
    gender: 'male',
    isToc: true,
    email: ''
  };

  ngOnInit() {
    // Initialization logic if needed
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contact);
      // You can perform further actions such as sending data to a server here
    }
  }
}

interface Contact {
  firstname: string;
  lastname: string;
  gender: string;
  isToc: boolean;
  email: string;
}
