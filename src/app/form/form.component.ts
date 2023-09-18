import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  constructor() { }

  registerForm:any;


  ngOnInit(): void{
    this.registerForm = new FormGroup({
        "firstName":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        "emailId": new FormControl(null, [Validators.required, Validators.email]),
        "mobileNumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
    });

  }

  submitData(){
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      alert(`Thank You ${this.registerForm.value.firstName}`);
      this.registerForm.reset();
    }
  }

  get firstname() { return this.registerForm.get('firstName');}  //firstName
  get lastname() { return this.registerForm.get('lastName');}  //lastname
  get emailid() {return this.registerForm.get('emailId');}  //emailid
  get mobilenumber() { return this.registerForm.get('mobileNumber');}  //mobilenumber


}
