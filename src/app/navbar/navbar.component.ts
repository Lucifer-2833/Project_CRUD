import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ChangeDetectionStrategy, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from "../home/home.component";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatButtonModule, MatIconModule, MatDividerModule, MatCheckboxModule, MatButtonToggleModule, NavbarComponent, MatToolbarModule, HomeComponent, AboutusComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentComponent: string = "home";

  changeTab(tabName: string){
    this.currentComponent = tabName;
  }

}
