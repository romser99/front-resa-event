import { Component , OnInit } from '@angular/core';
import { Client } from 'src/app/entities/client';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-client-profiles',
  templateUrl: './client-profiles.component.html',
  styleUrls: ['./client-profiles.component.scss']
})
export class ClientProfilesComponent implements OnInit {
  clients: Client[] = [] ;
  constructor (private clientService : ClientsService){}
  ngOnInit(){
    this.clientService
      .search()
      .subscribe((data: Client[]) => this.clients = data)

  }

}
