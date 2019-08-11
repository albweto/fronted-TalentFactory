import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: Usuario;
  constructor(private authService:AuthService,private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit() {
  }


  logOut() {
    this.authService.logout()
      .then(
        data => {
          this.router.navigate(['account/login']);
        },
        error => {

        });
  }

}
