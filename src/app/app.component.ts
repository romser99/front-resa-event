import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  compteur = 6;
  libelle = "Le compteur initial est";
  civilite = ""

  miseAjourDuCompteur(increment: number){
    this.compteur = increment === 1 ? this.compteur + 1 : this.compteur - 1
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
