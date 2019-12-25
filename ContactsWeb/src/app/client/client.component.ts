import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Router } from '@angular/router';

import { Session } from 'selenium-webdriver';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
chaine:string='';
nom:string='';
prenom:string='';
n:any=0;

  constructor(public http:Router,public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.toastr.success('Heureux de vous revoir!', '');
    this.chaine=this.http.url;
    this.newMethod();



  }


  private newMethod() {
    this.nom=this.chaine.split('@')[1];
this.n=this.chaine.split('@')[2].length;
    this.prenom=this.chaine.split('@')[2].substring(0,this.n-1);

  }

}
