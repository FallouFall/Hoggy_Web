import { Component, ViewContainerRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent  {


  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
 }
   
 showSuccess() {
   this.toastr.success('You are awesome!', 'Success!');
 }
 showError() {
   this.toastr.error('This is not good!', 'Oops!');
 }
 showWarning() {
   this.toastr.warning('You are being warned.', 'Alert!');
 }
 showInfo() {
   this.toastr.info('Just some information for you.');
 }
 
 showCustom() {
   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
 }


}
