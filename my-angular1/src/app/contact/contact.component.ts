import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  clicking(){
    console.log("this is the function from")
    alert("hello every one this is the contact")
  }
  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

}
