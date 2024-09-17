import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    // ** Data Binding **
    // string, number, boolean, date, object, array, null, undefined 
    // {{ This is called interpolation }} ** Data Binding
    // [property]="expression"
    //  This is called property binding 
    // [(ngModel)]="name"  ** Two Way Data binding
    // (event) = "onEvent()"  ** Event Binding
    // On-this-event = "call-this-function"
    name = "farhan";
    CurrentDate = new Date;
    inputType: string = "text";
    State: string = "Maha";

    greet(){
      alert("hello User!!")
    }
    showMessage(n: string){
      alert("Hello Coder :"+n)
    }

    // ** Directives **
    // 1. Structural : Responsible for changing structure of DOM
    //       a) *ngFor="let item of items"
    //       b) *ngIf="condition"
    // 2. Attribute : Responsible for adding extra behaviour to the existing element
    //       a) [ngClass]="{'class': true}"
    //       b) [ngStyle]="{'property': expression}"
}
