import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ChangeDetectionStrategy, computed, signal} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { NavbarComponent } from "./navbar/navbar.component";
import { MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatDividerModule, MatCheckboxModule, MatButtonToggleModule, NavbarComponent, MatToolbarModule, HomeComponent, AboutusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Project';
  name = 'ALi Afaq';
  Navbar = 'iMaktab';
  // constructor(){
  //   setTimeout(() => {
  //     this.name="Kamil Khan";
  //   }, 4000);

  // }
  toggletheme(){
    if(document.body.classList.contains('dark-theme')){
      document.body.classList.remove('dark-them');
      document.body.classList.add('light-theme');
    }
    if(document.body.classList.contains('light-theme')){}
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }



