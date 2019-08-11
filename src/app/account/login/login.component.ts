import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user : Usuario = new Usuario;
 errorMessage:string;
  constructor(private auth:AuthService,private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.user).then(data=>{
      this.router.navigate(['/home']);
      },err=>{
      this.errorMessage="error :  Username or password is incorrect";
      }
    )
  }

}
