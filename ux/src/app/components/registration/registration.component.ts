import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonService } from '../../services/person.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  personForm: FormGroup;
  validMessage: string = "";

  constructor(
        private formBuilder: FormBuilder,
        private personService: PersonService,
        private router: Router) {} 
  
        ngOnInit() {
          this.personForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            gender: new FormControl(),
            userName: new FormControl(),
            password: new FormControl(),
            birthDate: new FormControl(),
            countryOfOrigin: new FormControl(),
            race: new FormControl(),
            email: new FormControl(),
            phone: new FormControl(),
            alias: new FormControl(),
            isContactInfoPrivate: new FormControl(),
            isHispanic: new FormControl(),
            userType: new FormControl()
          }); 
        }
        emailFormControl = new FormControl('', [
          Validators.email
        ]);
      
        matcher = new MyErrorStateMatcher();

  onFormSubmit() {

    if (this.personForm.valid) {
      this.validMessage = "Your registration has been submitted. Thank you!";
      this.personService.createPerson(this.personForm.value).subscribe(
        data => {
          this.personForm.reset();
          this.router.navigate(['/main/activity']);
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
    this.personService.createPerson(this.personForm.value);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



