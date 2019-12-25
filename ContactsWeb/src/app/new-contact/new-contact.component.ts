import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../model/model.contacts';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact:Contacts=new Contacts();
mode:number=1;  
constructor(public contactService:ContactServices) { }

  ngOnInit() {
  }
  savecontact(){
this.contactService.savecontact(this.contact)
.subscribe(data=>
{
  this.contact=data;
  this.mode=2;
  console.log(data)
},err=>{

  console.log(err);
})
  }

}
