import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email : string;
  password :string ;
  matricula : string;

  constructor(private auth : AngularFireAuth, private db : AngularFireDatabase) { }

  ngOnInit() {
   
  }

  signUp(){
    this.auth.auth.createUserWithEmailAndPassword('','').then((user)=>{
      this.db.database.ref(`userId/${user.user.uid}`).set({
        matricula : this.matricula
      })
    })
  }

}
