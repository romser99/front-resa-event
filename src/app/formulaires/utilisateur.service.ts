import { Injectable } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatchService } from './must-match.service';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private fb: FormBuilder) { }

  public getForm(){
    const formOptions: AbstractControlOptions = {
      validators: (control: AbstractControl) => {
        const {value: {password, vpassword}} = control;
        console .log({password, vpassword});
        return password === vpassword ? null: {"passwordmatcherror": "les mots de passe différents"};
      },
   }
    return this.fb.group({
      id:'',
      prenom:'',
      nom:'',
      email:['', Validators.required, Validators.email],
      telephone:'',
      password:['', Validators.required],
      vpassword:''

    },formOptions)
  }

}
