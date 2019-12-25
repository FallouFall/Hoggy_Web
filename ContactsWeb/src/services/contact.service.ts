
import {Injectable} from "@angular/core"

import { Http } from '@angular/http';
import { Contacts } from "../model/model.contacts";
import { RenderVous } from "../model/model.rendervous";


@Injectable()
export class ContactServices{
size:number=3;
p:number=0;
login:String;
password:string;
currentUser:any;
    constructor(public http:Http){

    }

    find( login:String,password:String){
        return this.http.get("http://localhost:8080//compte/find?login="
        +login+"&password="+password)
       .map(resp=>resp.json());

    }
    findAdmin( login:String,password:String){
        return this.http.get("http://localhost:8080//compteAdmin/find?login="
        +login+"&password="+password)
       .map(resp=>resp.json());

    }

isloggin(){

    this.currentUser=true;
}
islogout()
{
    this.currentUser=false;
}
    getRenderVous( ){
        return this.http.get("http://localhost:8080/rendervous")
       .map(resp=>resp.json());

   }






    getConsultations(){
        return this.http.get("http://localhost:8080/consultations")
        .map(resp=>resp.json());
        

    }








    getContacts(){
        return this.http.get("http://localhost:8080/toList")
        .map(resp=>resp.json());
        

    }

    getContactByName(nom :String ){
         return this.http.get("http://localhost:8080/contacts/consultations?mc="
         +nom+"&size="+this.size+"&page="+this.p)
        .map(resp=>resp.json());

    }

    getRenderVousByMat(nom :String,page:number,size:number ){
        return this.http.get("http://localhost:8080/findrv?matricule="
        +nom+"&page="+page+"&size="+size)
       .map(resp=>resp.json());

   }
   getDemandeByMat(nom :String,page:number,size:number ){
    
        return this.http.get("http://localhost:8080/demande?matricule="
        +nom+"&page="+page+"&size="+size)
       .map(resp=>resp.json());

   }

   getOrdonnanceByMat(nom :String,page:number,size:number ){
    
        return this.http.get("http://localhost:8080/ordonnance?matricule="
        +nom+"&page="+page+"&size="+size)
       .map(resp=>resp.json());

   }

    getConsultationByMat(nom :String,page:number,size:number ){
    
        return this.http.get("http://localhost:8080/find?matricule="
        +nom+"&page="+page+"&size="+size)
       .map(resp=>resp.json());

   }

    savecontact(contacts :Contacts ){
        return this.http.post("http://localhost:8080/contacts" ,contacts)
       
       .map(resp=>resp.json());

   }


   saverv(contacts :RenderVous ){
    return this.http.post("http://localhost:8080/demanderv" ,contacts)
   
   .map(resp=>resp.json());

}

   getContactById(id:number ){
   
    return this.http.get("http://localhost:8080/contacts/"+id
    )
   .map(resp=>resp.json());

}
updateContact(contacts:Contacts ){
    
 return this.http.put("http://localhost:8080/contacts/"+contacts.id,contacts)
.map(resp=>resp.json());

}
deletecontact(id:number ){
   
 return this.http.delete("http://localhost:8080/contacts/"+id)
.map(resp=>resp.json());

}
}