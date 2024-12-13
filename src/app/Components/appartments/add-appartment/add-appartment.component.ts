import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appartment } from '../../../Models/Appartment';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {

  appartment: FormGroup = new FormGroup({
    apartNum: new FormControl("", [Validators.required, Validators.minLength(1)]),
    floorNum: new FormControl("", [Validators.required]),
    surface: new FormControl("", [Validators.required]),
    terrace: new FormControl(false, []),
    surfaceterrace: new FormControl("", []),
    category: new FormControl("", [Validators.required]),
    ResidenceId: new FormControl("", [Validators.required])
  });

  get apartNum() {
    return this.appartment.get('apartNum');
  }
  get floorNum() {
    return this.appartment.get('floorNum');
  }
  get surface() {
    return this.appartment.get('surface');
  }
  get terrace() {
    return this.appartment.get('terrace');
  }
  get surfaceterrace() {
    return this.appartment.get('surfaceterrace');
  }
  get category() {
    return this.appartment.get('category');
  }
  get ResidenceId() {
    return this.appartment.get('ResidenceId');
  }

  addAppartment() {
    console.log(this.appartment.value);
    // console.log(this.appartment.getRawValue());
    // this.appartment.patchValue({
    //   apartNum: 101,
    //   floorNum: 1,
    //   surface: 120,
    //   terrace: true,
    //   surfaceterrace: 20,
    //   category: "Luxury",
    //   ResidenceId: 1
    // })
    // this.appartment.reset()
  }

  protected readonly Appartment = Appartment;
}
