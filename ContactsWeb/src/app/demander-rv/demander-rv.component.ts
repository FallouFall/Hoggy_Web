import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RenderVous } from '../../model/model.rendervous';
import { ContactServices } from '../../services/contact.service';
import { ToastsManager } from 'ng2-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-demander-rv',
  templateUrl: './demander-rv.component.html',
  styleUrls: ['./demander-rv.component.css']
})
export class DemanderRvComponent implements OnInit {
  contact:RenderVous=new RenderVous();
  mode:number=1;  
  constructor(public contactService:ContactServices,public toastr: ToastsManager, vcr: ViewContainerRef) { 

    this.toastr.setRootViewContainerRef(vcr);

  }
  
    ngOnInit() {
    }
    savecontact(){
   if(this.contact.email.trim()=='')
   {
    this.toastr.error("Veiller reiseigner votre E MAIL");

   }
   else
   {
  this.contactService.saverv(this.contact)
  .subscribe(data=>
  {
    this.toastr.success(' Assurer vous que vous avez donner toutes les  informations entrer sont correctes avant de la continuer!', 'Oops!'); 
    
    this.toastr.success ("Vous aller recevoir un EMAIL de confirmation si votre demande est accepter.Apres Reception de ce dernier de votre part ,veiller imprimer le document car il vous sera demander a la reception ainsi que votre piece d'identite");
  
      this.contact=data;
    this.mode=2;
    this.toastr.success("Nos accusons reception de votre demande ,merci de votre interet");
    console.log(data)


}
  
  ,err=>{
  
    console.log(err);
  })

    }
  }
  }
  