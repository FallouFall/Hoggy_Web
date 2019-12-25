import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { ContactServices } from '../../services/contact.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit {
  size:number=3;
  p:number=0;
  page: any;
  nom: string = "";
  pages:Array<number>;
  currentPage:number=0;
  constructor(public http: Http, public contactservice: ContactServices,public toastr: ToastsManager, vcr: ViewContainerRef) { 

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {


  }


public print(){}
  public doChercher() {
    if(this.nom.trim()=='')
    {
      this.toastr.error(' Veiller Indiquer votre numero de  l ordonnance !', 'Oops!'); 
    }
    
    else{
        this.contactservice.getOrdonnanceByMat(this.nom,this.currentPage,this.size)
          .subscribe(data => {
            this.page = data;
            this.pages=new Array(data.totalPages);
           if(data.numberOfElements==0)
           this.toastr.error(' Desole nous ne trouvons aucune ordonnance !', 'Oops!');  
          },err=>{
            this.toastr.error(' Desole nous ne trouvons aucune ordonnance !', 'Oops!');   
          }
          )
          
        }
      
     
      }
    
     public chercherordonnance(){
    
       this. doChercher();
      
    
      }
    gotoPage(i:number)
    
    { 
    this.currentPage=i;
  this.doChercher();
    }
      
}
