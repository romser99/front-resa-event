import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionClientComponent } from './components/connection-client/connection-client.component';
import { UtilisateurEditComponent } from './components/utilisateur-edit/utilisateur-edit.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'accueil',
    component: HomeComponent
  },
  {
    path:'commentaires/:id',
    component: CommentDetailComponent

  },
  {
  path:'commentaires',
  component: CommentsComponent
  },
  {
    path:'',
    redirectTo :'accueil',
    pathMatch:'full'
    
  },
  {
    path:'inscription',
    component: UtilisateurEditComponent
  },
  {
    path:'connection',
    component: ConnectionClientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
