import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = "";
  password : string = "";

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    console.log(this.email)
  }

}
