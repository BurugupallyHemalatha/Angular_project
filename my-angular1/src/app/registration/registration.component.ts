import { Component } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator } from  '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  registrationForm: FormGroup ;
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullname :[],  
      email:[],
      Passowrd:[],
      ConformPassowrd :[ ],
      DateOfBirth:[ ],
      Phonenumber:[ ],
      gender:[]
    });
   
  }
   

  submit(){
  console.log('Your form data : ', this.registrationForm.value );
}
}

