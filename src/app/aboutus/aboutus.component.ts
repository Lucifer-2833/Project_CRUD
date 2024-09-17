import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit {
  ngOnInit(): void {
      // Once the Component loads the function[ngOnInit] will be invoked
      // alert("Hi!!")  
  }
}
