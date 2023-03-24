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
    return this.http.get<Client[]>('http://localhost:8080/api/client' )
  }

  public ajoute(newclient : any) {
    return this.http.post('http://localhost:8080/api/client',newclient)
  }

  public login(email : String, password: String): Observable<Boolean>{
    console.log(this.http.get<Boolean>('http://localhost:8080/api/client?mail='+email+'&password='+password))
    return this.http.get<Boolean>('http://localhost:8080/api/client?mail='+email+'&password='+password);
  
  }
}
