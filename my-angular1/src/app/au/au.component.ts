import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-au',
  templateUrl: './au.component.html',
  styleUrls: [ './au.component.scss' ]
})
export class AuComponent implements OnInit {
  name = '';
  values:any = [];
  arrayss: FormArray | undefined ;
  

  ngOnInit() {
    this.auForm = this.formBuilder.group({
      values: this.formBuilder.array([this.createItem()])
    })
  }

  createItem() {
    return this.formBuilder.group({
      firstnames: [''],
       lastnames: [''],
      // firstname:[],
      // lastname:[],
    })
  }
  removefeild(i: number){
    this.values.splice(i,1);
  }

  // addfeild(){
  //   this.values.push({value:'null'});
  // }
  
  auForm: FormGroup ;
  constructor(private formBuilder: FormBuilder) {
    this.auForm = this.formBuilder.group({
      // firstname:[],
      // lastname:[],
       lastnames:[],
      firstnames:[],
      // firstnames: this.formBuilder.array([
      //   this.formBuilder.control(null)
      // ]),
      // lastnames:this.formBuilder.array([
      //   this.formBuilder.control(null)
      // ]),
      
 })
  }

  addfeild() {
   this.values=this.auForm.get('values') as FormArray;
   this.values.push(this.createItem())
    
  }
  
  getfirstnameFormControls():AbstractControl[] {
    return (<FormArray> this.auForm.get('firstname')).controls
  }
  total(){
    console.log("this is values:",this.auForm.value)
  }
}

