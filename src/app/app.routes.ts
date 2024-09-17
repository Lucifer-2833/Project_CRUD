import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgModule} from '@angular/core';
import { AboutusComponent } from "./aboutus/aboutus.component";

export const routes: Routes = [
    // { path: '', redirectTo:'home', pathMatch: 'full' },
    {path: 'home' , component: HomeComponent },
    {path: 'navbar' , component: HomeComponent },
    {path: 'signin' , component: HomeComponent },
    {path: 'signup' , component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }