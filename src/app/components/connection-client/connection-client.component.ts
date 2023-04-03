import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/formulaires/connection.service';

import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-connection-client',
  templateUrl: './connection-client.component.html',
  styleUrls: ['./connection-client.component.scss']
})
export class ConnectionClientComponent implements OnInit {
  
  validite: any;
  userForm: any ;
  authrequest : any
  

  constructor(private cs: ClientsService,private cos: ConnectionService) {}
  ngOnInit(): void {
    this.userForm = this.cos.getForm()
  }

  public login() {
    this.authrequest = this.userForm.value;
    if (this.userForm.status === "INVALID") return;
    else {
      this.cs.login(this.authrequest).subscribe((data: any) => console.log(data));
    
    }
    
    
  
    
  }

}
