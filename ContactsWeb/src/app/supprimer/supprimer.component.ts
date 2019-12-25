import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../model/model.contacts';
import { ContactServices } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
const appRoutes:Routes=[

  {path:'toList',component:ContactsComponent},
  

];
@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
  id:number;
  contact:Contacts=new Contacts();
  mode:number=1;  
  constructor(public contactService:ContactServices,public activatedRoute:ActivatedRoute) { 

    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getContactById(this.id).
    subscribe(data=>{
      this.contact=data;
     } )
  }

  delete(){
    let confirm=window.confirm("Voulez Vous Supprimer le contact")
    if(confirm==true)
    {
      this.contactService.deletecontact(this.id)
      .subscribe(data=>
      {
        let confirm=window.alert("Suppression Reussie")
        this.contact=data;
        
   
   this. mode=2;
      },err=>{
      
        console.log(err);
      })
    }
    
  
      }
    
    }
    