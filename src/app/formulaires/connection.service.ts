import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private fb: FormBuilder) { }

  public getForm(){
    return this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]

    })
  }
}
