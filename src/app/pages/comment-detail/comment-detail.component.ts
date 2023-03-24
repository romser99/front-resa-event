import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentairesService } from 'src/app/services/commentaires.service';
import { Comment } from 'src/app/entities/comment';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit{
  id: number = 0;
  comment: Comment = {}
  constructor(private router:ActivatedRoute, private commentaireService : CommentairesService){}
  ngOnInit(): void {
      const idAsString = this.router.snapshot.paramMap.get("id")
      this.id = idAsString ? +idAsString : 0
      console.log(this.id);
      this.commentaireService
      .read(this.id)
      .subscribe((data: Comment) => this.comment = data)

  }

}
