import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent implements OnInit {
  chaine:string='';
  nom:string='';
  prenom:string='';
  n:any=0;
  

  size:number=3;
  p:number=0;
  page: any;
  name: string = "";
  pages:Array<number>;
  currentPage:number=0;



  namerv: string = "";
  pagerv: any;
  currentPagerv:number=0;
  pagesrv:Array<number>;



  mode:number=1;
  hs(){
    
        this.mode=1;
      }
  cons(){

    this.mode=1;
  }
  rv(){
    
        this.mode=2;
      }
    constructor(public http:Router,public toastr: ToastsManager, vcr: ViewContainerRef, public contactservice: ContactServices) { 
      this.toastr.setRootViewContainerRef(vcr);
    }
  
    ngOnInit() {
     
      this.chaine=this.http.url;
      this.newMethod();
      this.toastr.success('Heureux de vous revoir '+this.nom+" "+this.prenom, '');

     this.contactservice.getConsultations()
      .subscribe(data => {
        this.page = data;
        this.pages=new Array(data.totalPages);

      },err=>{

      }
      )



      this.contactservice.getRenderVous()
      .subscribe(data => {
        this.pagerv = data;
        this.pagesrv=new Array(data.totalPages);

      },err=>{

      }
      )

  
    }
  
  


    public doChercherrv() {
      this.pagerv=null;
      if(this.name.trim()=='')
      {
        this.toastr.error(' Veiller Indiquer votre numero de  consultation !', 'Oops!'); 
      }
      
      else{
          this.contactservice.getRenderVousByMat(this.namerv,this.currentPagerv,this.size)
            .subscribe(data => {
              this.pagerv = data;
              this.pagesrv=new Array(data.totalPages);
             if(data.numberOfElements==0)
             this.toastr.error(' Desole nous ne trouvons aucune consultation !', 'Oops!');  
            },err=>{
              this.toastr.error(' Desole nous ne trouvons aucune consultation !', 'Oops!');   
            }
            )
            
          }
        
       
        }



    public doChercher() {
      this.page=null;
      if(this.nom.trim()=='')
      {
        this.toastr.error(' Veiller Indiquer votre numero de  consultation !', 'Oops!'); 
      }
      
      else{
          this.contactservice.getConsultationByMat(this.name,this.currentPage,this.size)
            .subscribe(data => {
              this.page = data;
              this.pages=new Array(data.totalPages);
             if(data.numberOfElements==0)
             this.toastr.error(' Desole nous ne trouvons aucune consultation !', 'Oops!');  
            },err=>{
              this.toastr.error(' Desole nous ne trouvons aucune consultation !', 'Oops!');   
            }
            )
            
          }
        
       
        }
      
       public chercherconsultation(){
      
         this. doChercher();
        
      
        }


        public chercherrv(){
          
             this. doChercherrv();
            
          
            }
    



      gotoPage(i:number)
      
      { 
      this.currentPage=i;
    this.doChercher();
      }
        
 gotoPagerv(t:number)
      
      { 
      this.currentPagerv=t;
    this.doChercher();
      }
        


    private newMethod() {
      this.nom=this.chaine.split('@')[1];
  this.n=this.chaine.split('@')[2].length;
      this.prenom=this.chaine.split('@')[2].substring(0,this.n-1);
  
    }
  
  }
  