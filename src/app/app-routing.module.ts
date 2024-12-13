import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResidencesComponent} from "./Components/residences/residences.component";
import {NotfoundComponent} from "./Components/notfound/notfound.component";
import {ResidenceDetailsComponent} from "./Components/residences/residence-details/residence-details.component";
import {AddResidenceComponent} from "./Components/residences/add-residence/add-residence.component";
import {AppartmentsComponent} from "./Components/appartments/appartments.component";
import {AddAppartmentComponent} from "./Components/appartments/add-appartment/add-appartment.component";

const routes: Routes = [
  {path:'residences',component:ResidencesComponent},
  {path:'',redirectTo:'/residences',pathMatch:'full'},
  {path:'details/:id',component:ResidenceDetailsComponent},
  {path:'residences/add',component:AddResidenceComponent},
  {path:'appartments',component:AppartmentsComponent},
  {path:'appartments/add',component:AddAppartmentComponent},
  {path:'appartments/:residenceId',component:AddResidenceComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
