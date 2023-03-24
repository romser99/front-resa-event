import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilisateurService } from 'src/app/formulaires/utilisateur.service';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from 'src/app/entities/client';


@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.scss']
})


export class UtilisateurEditComponent implements OnInit {

  userForm: any ;
  newclient: any ;
  constructor(private us: UtilisateurService, private cs: ClientsService){}
  ngOnInit(): void {
    this.userForm = this.us.getForm()
  
  }

  public enregistrer() {
    
    this.newclient = this.userForm.value ;
    console.log(this.userForm.value)
    if (this.userForm.status === "INVALID") return;
    else {
      this.cs.ajoute(this.newclient).subscribe((data: any) => console.log(data));
    }

  
    
  }
  
}
