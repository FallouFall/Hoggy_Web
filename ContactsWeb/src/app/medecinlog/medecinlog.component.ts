import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Contacts } from '../../model/model.contacts';
import { ContactServices } from '../../services/contact.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-medecinlog',
  templateUrl: './medecinlog.component.html',
  styleUrls: ['./medecinlog.component.css']
})
export class MedecinlogComponent implements OnInit {
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
          this.toastr.error(' Veiller Indiquer votre login  !', 'Oops!'); 
        }
        else   if(this.password.trim()==''){
          this.toastr.error(' Veiller Indiquer votre mot de passe  !', 'Oops!'); 
        }
        else
        {
        this.contactService.findAdmin(this.login,this.password)
        .subscribe(data=>
        {
          this.contact=data;
         
        window.location.href='/Personnel?'+"@"+this.contact.prenom+"@"+this.contact.nom;
        },err=>{
          this.toastr.error(' Aucun compte trouver : Login ou Password  incorrects!', 'Oops!'); 
         
          
        })
          }
        }
    }
    