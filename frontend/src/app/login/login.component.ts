import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = "";
  password : string = "";
  matricula : string;
  rolAsignado : string;

  constructor(public auth: AngularFireAuth, private db : AngularFireDatabase, private router : Router) { }

  ngOnInit() {
    this.auth.authState.subscribe((user)=>{
      if (user) {
        console.log("User logged in")
        //this.router.navigateByUrl('home');
      }else{
        this.router.navigateByUrl('login');
      }
    })
  }

  login(){
    this.auth.auth.signInWithEmailAndPassword(this.email,this.password).then((user)=>{
      console.log(user)

      this.db.database.ref('registrados').once('value').then(snap=>{
        snap.forEach(element => {
            if(this.email == element.val().email){
              this.matricula = element.val().matricula;
              //function to fetch
              this.db.database.ref(`roles/${this.matricula}/`).once('value').then(snap=>{
                if(snap.exists()){
                  this.rolAsignado = snap.val().role
                  console.log(this.rolAsignado);
                }

                if(this.rolAsignado === "asesor"){
                    this.router.navigateByUrl('/asesor/dashboard')
                } else if (this.rolAsignado === "admin"){
                    this.router.navigateByUrl('/admin/home')
                } else {
                    this.router.navigateByUrl('/candidatos/bloques')
                }
              })
          }
        });
      })

    }).catch((error)=>{
      alert(error);
    })
  }

}
