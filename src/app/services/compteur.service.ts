import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  constructor() { }

  public update(compteur: number, increment : number){
    return increment === 1 ? compteur + 1 : compteur - 1;
  }
}
