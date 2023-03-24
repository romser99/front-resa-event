import {Comment } from 'src/app/entities/comment';
import { Component, OnInit } from '@angular/core';
import { CommentairesService } from 'src/app/services/commentaires.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [] ;
  constructor (private commentaireService : CommentairesService){}
  ngOnInit(){
    this.commentaireService
      .search()
      .subscribe((data: Comment[]) => this.comments = data)

  }

}