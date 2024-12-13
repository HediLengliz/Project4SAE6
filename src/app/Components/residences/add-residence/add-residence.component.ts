import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Residence} from "../../../Models/Residence";

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  residence : FormGroup = new FormGroup({
    name:  new FormControl("", [Validators.required, Validators.minLength(3)]),
    address: new FormControl("", [Validators.required, Validators.minLength(3)]),
    // address: new FormGroup({
    //   city: new FormControl("", []),
    //   street: new FormControl("", []),
    //   zip: new FormControl("", [])
    // }),
    image:  new FormControl("", [Validators.required]),
    status: new FormControl("Disponible", [])
  })
   get name() {
    return this.residence.get('name');
   }
   get address(){
    return this.residence.get('address');
   }
   get image(){
    return this.residence.get('image');
   }
  addResidence() {
    console.log(this.residence.value);
    // console.log(this.residence.getRawValue());
    // this.residence.patchValue({
    //   name: "residence vetrina",
    //   address: {
    //     city: "Tunis",
    //     street: "Tunis",
    //     zip: "1000"
    //   },
    //   image: "https://www.google.com",
    //   status: "Disponible"
    // })
    // this.residence.reset()

  }

  protected readonly Residence = Residence;
}
