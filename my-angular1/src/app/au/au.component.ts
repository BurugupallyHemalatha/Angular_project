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
  arrayss: any;
 
  ngOnInit() {
    this.auForm = this.formBuilder.group({
      arrayss: this.formBuilder.array([this.createItem()])
    })
  }

  createItem() {
    return this.formBuilder.group({
      firstnames: [''],
      laststnames: ['']
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
      // laststname:[],
      // laststnames:[],
      // firstnames:[],
      // firstnames: this.formBuilder.array([
      //   this.formBuilder.control(null)
      // ]),
      // laststnames:this.formBuilder.array([
      //   this.formBuilder.control(null)
      // ]),
      
})
  }

  addfeild() {
   this.arrayss=this.auForm.get('arrayss') as FormArray;
   this.arrayss.push(this.createItem())
    
  }
  
  // getfirstnameFormControls(): AbstractControl[] {
  //   return (<FormArray> this.auForm.get('firstname')).controls
  // }
  total(){
    console.log("hello:",this.auForm.value)
  }
}

