import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Contacts } from '../../model/model.contacts';
import { ContactServices } from '../../services/contact.service';
import { Location } from '@angular/common';
import { ClientComponent } from '../client/client.component';
import { ToastsManager } from 'ng2-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-clientlog',
  templateUrl: './clientlog.component.html',
  styleUrls: ['./clientlog.component.css']
})
export class ClientlogComponent implements OnInit {
  contact:Contacts=new Contacts();
  
  login:string='';password:string='';
  
  constructor(public contactService:ContactServices,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
 
   }

  ngOnInit() {
 
  
  }

  find(){

    if(this.login.trim()=='')
    {
      this.toastr.error(' Veiller Indiquer votre login !', 'Oops!'); 
    }
    else   if(this.password.trim()==''){
      this.toastr.error(' Veiller Indiquer votre mot de passe  !', 'Oops!'); 
    }
    else
    {
    this.contactService.find(this.login,this.password)
    .subscribe(data=>
    {
      this.contact=data;
     
    window.location.href='/client?'+"@"+this.contact.prenom+"@"+this.contact.nom;
    },err=>{
      this.toastr.error(' Aucun compte trouver : Login ou Password  incorrects!', 'Oops!'); 
     
      
    })
      }
    }
}
