import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = "";
  password : string = "";

  constructor(public auth: AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  login(){
    this.auth.auth.signInWithEmailAndPassword(this.email,this.password).then((user)=>{
      console.log(user)
      //this.router.navigateByUrl('home');
    }).catch((error)=>{
      alert(error);
    })
  }

}
