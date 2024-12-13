import { Component } from '@angular/core';
import {Residence} from "../../Models/Residence";
import {AddResidenceComponent} from "./add-residence/add-residence.component";

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  title: string = "liste des residences";
  searchTerm: string = '';
  residences: Residence[] = [
    {
      id: 1, "name": "El fel", "address": "Borj Cedria",
      "image": "../../assets/images/R1.jpg", status: "Disponible"
    },
    {
      id: 2, "name": "El yasmine",
      "address": "Ezzahra", "image": "../../assets/images/R2.jpg", status:
        "Disponible"
    },
    {
      id: 3, "name": "El Arij",
      "address": "Rades", "image": "../../assets/images/R3.jpg", status:
        "Vendu"
    },
    {
      id: 4, "name": "El Anber", "address": "inconnu",
      "image": "../../assets/images/R4.jpg", status: "En Construction"
    }
  ];

  submit(id: number) {
    alert("Residence id: " + id);

  }

  showLocation(address: string) {
    if (address == "inconnu") {
      alert("L'adresse de cette résidence est inconnue ⁉️");
    } else {
      alert("Residence address: 🏠" + address);
    }
  }

  favoriteResidences: Residence[] = [];

  filteredByAdress() {
    return this.residences.filter(r =>
      r.address.toLowerCase().includes(this.searchTerm.toLowerCase()))
      ;
  }

  likeResidence(residence: Residence) {
    let index = this.favoriteResidences.findIndex(r => r.id == residence.id);
    if (index == -1) {
      this.favoriteResidences.push(residence);
    } else {
      this.favoriteResidences.splice(index, 1);

    }
  }

  getAllResidences() {
    console.log(Residence + " " + JSON.stringify(this.residences));
  }
  isFavoris(residence: Residence) {
    return this.favoriteResidences.some(r => r.id == residence.id);
  }


  protected readonly AddResidenceComponent = AddResidenceComponent;
}
