import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ClientProfilesComponent } from './components/client-profiles/client-profiles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilisateurEditComponent } from './components/utilisateur-edit/utilisateur-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';
import { ConnectionClientComponent } from './components/connection-client/connection-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ClientProfilesComponent,
    UtilisateurEditComponent,
    HeaderComponent,
    HomeComponent,
    CommentDetailComponent,
    ConnectionClientComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
