import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email : string;
  password :string;
  confPassword : string;
  matricula : string;
  rolAsignado : string;

  constructor(private auth : AngularFireAuth, private db : AngularFireDatabase, private router: Router) { }

  ngOnInit() {

  }

  signUp(){
    if(this.password === this.confPassword) {
      this.auth.auth.createUserWithEmailAndPassword(this.email,this.password).then((user)=>{
        this.db.database.ref(`userId/${user.user.uid}`).set({
          matricula : this.matricula
        })
        //Obtener datos de la base de datos de los registrados candidatos
        this.db.database.ref(`database/${this.matricula}/`).once('value').then(snap=>{
          //setear info de nuevo candidato
          console.log(snap)
          this.db.database.ref(`registrados/${this.matricula}`).set({
            matricula : this.matricula,
            email: this.email,
            uid : user.user.uid
          })
          this.router.navigateByUrl('/admin/home');
        })
      })
    } else {
      console.log('Password not confirmed.')
    }
  }

  // signUp(){
  //   if(this.password === this.confPassword) {
  //     this.auth.auth.createUserWithEmailAndPassword(this.email,this.password).then((user)=>{
  //       this.db.database.ref(`userId/${user.user.uid}`).set({
  //         matricula : this.matricula
  //       })
  //       //Obtener datos de la base de datos de los registrados candidatos
  //       this.db.database.ref(`database/${this.matricula}/`).once('value').then(snap=>{
  //
  //         this.db.database.ref(`roles/${this.matricula}/`).once('value').then(snap=>{
  //           if(snap.exists()){
  //             this.rolAsignado = snap.val().role
  //             this.db.database.ref(`registrados/${this.matricula}`).set({
  //               matricula : this.matricula,
  //               nombre : snap.val().fname,
  //               email: this.email,
  //               uid : user.user.uid
  //             })
  //
  //             if(this.rolAsignado === "admin"){
  //               this.router.navigateByUrl('/admin/home');
  //             }else if(this.rolAsignado == "asesor"){
  //               this.router.navigateByUrl('asesor/dashboard');
  //             }
  //
  //           }else{
  //             this.db.database.ref(`registrados/${this.matricula}`).set({
  //               matricula : this.matricula,
  //               nombre : snap.val().fname,
  //               email: this.email,
  //               uid : user.user.uid
  //             })
  //           }
  //
  //         })
  //
  //         if(snap.val().key === this.rolMatricula)
  //
  //       })
  //     })
  //   } else {
  //     console.log('Password not confirmed.')
  //   }
  // }

}
