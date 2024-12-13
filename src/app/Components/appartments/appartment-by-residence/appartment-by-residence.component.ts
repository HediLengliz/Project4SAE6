import { Component } from '@angular/core';

@Component({
  selector: 'app-appartment-by-residence',
  templateUrl: './appartment-by-residence.component.html',
  styleUrls: ['./appartment-by-residence.component.css']
})
export class AppartmentByResidenceComponent {
  title: string = "liste des appartements par résidence";
  appartments = [
    {
      id: 1, "apartNum": 1, "floorNum": 1, "surface": 100, "terrace": true, "surfaceterrace": 20, "category": "S+1", "ResidenceId": 1
    },
    {
      id: 2, "apartNum": 2, "floorNum": 2, "surface": 120, "terrace": false, "surfaceterrace": 0, "category": "S+2", "ResidenceId": 1
    },
    {
      id: 3, "apartNum": 3, "floorNum": 3, "surface": 150, "terrace": true, "surfaceterrace": 30, "category": "S+3", "ResidenceId": 1
    },
    {
      id: 4, "apartNum": 4, "floorNum": 4, "surface": 200, "terrace": false, "surfaceterrace": 0, "category": "S+4", "ResidenceId": 1
    }
  ];

  constructor() {
    console.log(this.appartments);
  }
}
