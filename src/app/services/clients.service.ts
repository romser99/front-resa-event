import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../entities/client'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  

  constructor(private http: HttpClient) { }

  public search(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8081/api/client' )
  }

  public ajoute(newclient : any) {
    return this.http.post('http://localhost:8081/api/client/inscription',newclient)
  }

  public login(authrequest : any) {

    return this.http.post<Boolean>('http://localhost:8081/api/auth/login', authrequest);
  
  }
}
