import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacts } from '../../model/model.contacts';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
contact:Contacts=new Contacts;
mode:number=1;
page :any;
id:number; 
  constructor(public contactService:ContactServices ,public activatedRoute:ActivatedRoute) {
 this.id=activatedRoute.snapshot.params['id'];
 
   }

  ngOnInit() {
    
   this.contactService.getContactById(this.id).
    subscribe(data=>{
      this.contact=data;
     } )
  }
  update(contact ){

    this.contactService.updateContact(this.contact).
    subscribe(data=>{
    this.mode=2;
     } )
  }


delete(contact:Contacts ){
    
        this.contactService.deletecontact(contact.id).
        subscribe(data=>{
     console.log("reussi");
         },
         err=>{console.log(err);}
         )
      }
}
