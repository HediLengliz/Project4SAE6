import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ResidencesComponent } from './Components/residences/residences.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';
import { AppartmentsComponent } from './Components/appartments/appartments.component';
import {AddAppartmentComponent} from "./Components/appartments/add-appartment/add-appartment.component";
import { AppartmentByResidenceComponent } from './Components/appartments/appartment-by-residence/appartment-by-residence.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResidencesComponent,
    NotfoundComponent,
    FooterComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AppartmentsComponent,
    AddAppartmentComponent,
    AppartmentByResidenceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
