import { Component, OnInit, NgModule } from '@angular/core';
import "rxjs/add/operator/map";
import { ContactServices } from '../../services/contact.service';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { directive } from '@angular/core/src/render3/instructions';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']

})
export class ContactsComponent implements OnInit {


 
  page: any;
  nom: string = "";
  pages:Array<number>;
  currentPage:number;

  constructor(  public http: Http, public contactservice: ContactServices) { }

  ngOnInit() {
    this.contactservice.getContacts()
      .subscribe(data => {

        this.page = data;
        this.pages=new Array(data.totalPages);

      }
      )


  }


  public doChercher() {

    this.contactservice.getContactByName(this.nom)
      .subscribe(data => {
        this.page = data;
        this.pages=new Array(data.totalPages);

      },err=>{console.log(err);}
      )
      

  }

 public chercher(){

   this. doChercher();
  

  }
gotoPage(i:number)

{
this.currentPage=i;
}

deleteContact(id:number)
{
this.contactservice.deletecontact(id)


}
}