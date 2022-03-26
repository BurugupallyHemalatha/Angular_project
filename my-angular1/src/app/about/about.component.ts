import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
  name = '';
  values:any = [];
  formBuilder: any;
  arr: FormArray | undefined;
  auForm: FormGroup;
  ngOnInit() {}
 
  createItem() {
    return this.formBuilder.group({
      firstname: [''],
      lastname: ['']
    })
  }

constructor(){
  this.auForm = this.formBuilder.group({
    values: this.formBuilder.array([this.createItem()])
  })
}

  // removevalue(i: number){
  //   this.values.splice(i,1);
  // }

  addvalue() {
    this.arr = this.auForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }
  total(){
    console.log("helo",this.auForm.value)
  }
}
