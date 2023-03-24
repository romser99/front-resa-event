import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private fb: FormBuilder) { }

  public getForm(){
    return this.fb.group({
      id:'',
      prenom:['', Validators.required],
      nom:['', Validators.required],
      email:['', Validators.required],
      telephone:['', Validators.required],
      password:['', Validators.required],

    })
  }

}
