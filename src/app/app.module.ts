import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibelleCompteurComponent } from './libelle-compteur/libelle-compteur.component';
import { EditionCompteurComponent } from './edition-compteur/edition-compteur.component';
import { CiviliteComponent } from './civilite/civilite.component';
import { EditionCiviliteComponent } from './edition-civilite/edition-civilite.component';

@NgModule({
  declarations: [
    AppComponent,
    LibelleCompteurComponent,
    EditionCompteurComponent,
    CiviliteComponent,
    EditionCiviliteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
