import { Component, OnInit } from '@angular/core';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-listevaccination',
  templateUrl: './listevaccination.component.html',
  styleUrls: ['./listevaccination.component.css']
})
export class ListevaccinationComponent implements OnInit {
  size:number=3;
  p:number=0;
  page: any;
  nom: string = "";
  pages:Array<number>;
  currentPage:number=0;
  constructor( public contactservice: ContactServices) { }

  ngOnInit() {
  }
  public doChercher() {
    
        this.contactservice.getDemandeByMat(this.nom,this.currentPage,this.size)
          .subscribe(data => {
            this.page = data;
            this.pages=new Array(data.totalPages);
    
          },err=>{console.log(err);}
          )
          
    
      }
    
     public chercherconsultation(){
    
       this. doChercher();
      
    
      }
    gotoPage(i:number)
    
    { 
    this.currentPage=i;
  this.doChercher();
    }
      
}
