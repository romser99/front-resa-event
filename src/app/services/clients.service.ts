import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../entities/client'

@Injectable({
  providedIn: 'root'
})



export class ClientsService {



  constructor(private http: HttpClient, ) { }

auth_token = sessionStorage.getItem("TOKEN");
headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });
requestOptions = { headers: this.headers };

  public search(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8081/api/client' )
  }

  public ajoute(newclient : any) {
    return this.http.post('http://localhost:8081/api/client/inscription',newclient,this.requestOptions)
  }

  public login(authrequest : any) {

    return this.http.post<any[]>('http://localhost:8081/api/auth/login', authrequest);

  }
}
