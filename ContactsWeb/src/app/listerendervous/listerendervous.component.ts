import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContactServices } from '../../services/contact.service';
import { Http } from '@angular/http';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-listerendervous',
  templateUrl: './listerendervous.component.html',
  styleUrls: ['./listerendervous.component.css']
})
export class ListerendervousComponent implements OnInit {

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



  public doChercher() {
    if(this.nom.trim()=='')
    {
      this.toastr.error(' Veiller Indiquer votre numero de  Render Vous !', 'Oops!'); 
    }
    else{
        this.contactservice.getRenderVousByMat(this.nom,this.currentPage,this.size)
          .subscribe(data => {
            this.page = data;
            this.pages=new Array(data.totalPages);
    
            if(data.numberOfElements==0)
            this.toastr.error(' Desole nous ne trouvons aucun  Render Vous !', 'Oops!');  
           },err=>{
             this.toastr.error(' Desole nous ne trouvons aucun  Render Vous!', 'Oops!');   
            }
          )
          
        }
      
     
      }
    
     public chercherrv(){
    
       this. doChercher();
      
    
      }
    gotoPage(i:number)
    
    { 
    this.currentPage=i;
  this.doChercher();
    }
      
}
