import { Component  } from '@angular/core';
import { CompteurService  } from './services/compteur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  compteur = 6;
  libelle = "Le compteur initial est";
  civilite = ""
  constructor (private compteurService : CompteurService){
    
  }

  miseAjourDuCompteur(increment: number){
    console.log(increment ===1)
    this.compteur = this.compteurService.update(this.compteur, increment)
  }
  majCivilite(valeur : number){
    if (valeur == 1){
      this.civilite= "Monsieur";
    }
    else if (valeur == -1){
      this.civilite = "Madame"
    }
    else {
      this.civilite = "Roll"

    }

  }

}
