import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  http:Http) { }

   login(usuario: Usuario){

    let headers= new Headers();
    headers.append('Accept', 'application/json')

    var base64Credential: string = btoa( usuario.username+ ':' + usuario.password);
    headers.append("Authorization", "Basic " + base64Credential);

    let options= new RequestOptions();
    options.headers=headers;

    return this.http.get('http://localhost:8080/account/login', options).forEach((response: Response) => {
      
      let user = response.json().principal;
      if (user) {

        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });

  }


  logout(){
    return this.http.post('http://localhost:8080accountlogout',{}).forEach((response: Response) => {
        localStorage.removeItem('currentUser');
      });
  }
}
