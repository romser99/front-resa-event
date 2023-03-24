import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../entities/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  constructor(private http: HttpClient) { }

  public search(): Observable<Comment[]> {
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
  }

  public read(id : number): Observable<Comment>{
    return this.http.get<Comment>("https://jsonplaceholder.typicode.com/comments/"+id)

  }
}
