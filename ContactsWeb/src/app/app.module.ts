import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule  }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {HttpModule} from '@angular/http';
import { ContactServices } from '../services/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { ClientlogComponent } from './clientlog/clientlog.component';
import { MedecinlogComponent } from './medecinlog/medecinlog.component';
import { ClientComponent } from './client/client.component';
import { ListeconsultationComponent } from './listeconsultation/listeconsultation.component';
import { ListevaccinationComponent } from './listevaccination/listevaccination.component';
import { ListerendervousComponent } from './listerendervous/listerendervous.component';
import { RemercimentComponent } from './remerciment/remerciment.component';
import { NousComponent } from './nous/nous.component';
import { DemanderRvComponent } from './demander-rv/demander-rv.component';
import {AngularFireModule} from 'angularfire2';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';

const appRoutes:Routes=[
  {path:'consultation',component:ListeconsultationComponent},
  {path:'vaccin',component:ListevaccinationComponent},
  {path:'rendervous',component:ListerendervousComponent},
  {path:'nous',component:NousComponent},
  {path:'remercier',component:RemercimentComponent},
  {path:'demanderrv',component:DemanderRvComponent},
  {path:'about',component:AboutComponent},
  {path:'clientlog',component:ClientlogComponent},
  {path:'ordonnance',component:OrdonnanceComponent},
  {path:'medecinlog',component:MedecinlogComponent},
  {path:'new-contact',component:NewContactComponent},
  {path:'toList',component:ContactsComponent},
  {path:'client',component:ClientComponent},
  {path:'Personnel',component:AccueilAdminComponent},
  {path:'editContact/:id',component:NouveauContactComponent},
  {path:'supprimer/:id',component:SupprimerComponent},
  
  {path:'',redirectTo:'/about',pathMatch:'full'}
  

];

@NgModule({
  
  declarations: [
    
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    SupprimerComponent,
    ClientlogComponent,
    MedecinlogComponent,
    ClientComponent,
    ListeconsultationComponent,
    ListevaccinationComponent,
    ListerendervousComponent,
    RemercimentComponent,
    NousComponent,
    DemanderRvComponent,
    OrdonnanceComponent,
    AccueilAdminComponent,
 
  
  ],
  imports: [
    HttpModule,ToastModule.forRoot(),BrowserAnimationsModule,
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
