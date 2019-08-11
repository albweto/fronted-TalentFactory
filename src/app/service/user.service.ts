import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  createUser(usuario: Usuario){
    return this.httpClient.post('http://localhost:8080/saveOrupdate',usuario).subscribe((response: Response) => JSON.stringify(usuario));
  }
}
