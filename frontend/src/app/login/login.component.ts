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
    this.auth.authState.subscribe((user)=>{
      if (user) {
        console.log("User logged in")
        //this.router.navigateByUrl('home');
      }
    })
  }

  login(){
    this.auth.auth.signInWithEmailAndPassword(this.email,this.password).then((user)=>{
      console.log(user)
      this.router.navigateByUrl('/admin/home');
    }).catch((error)=>{
      alert(error);
    })
  }

}
