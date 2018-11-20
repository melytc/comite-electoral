import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-asesor-dashboard',
  templateUrl: './asesor-dashboard.component.html',
  styleUrls: ['./asesor-dashboard.component.css']
})
export class AsesorDashboardComponent implements OnInit {

  // btnStyle : string;
  matriculaAlumno : string;
  carreraAlumno : string;
  estadoAlumno : string;
  nombreAlumno : string;

  bloque : string;
  votandoPara : string;
  arrCarreras : string[];
  estado : string;
  hasVoted ; boolean;
  arrEleccionesAVotar : Array<any> = [];
  alumnoExist = false;


  idFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private db : AngularFireDatabase, private router : Router) { }

  ngOnInit() {
    // this.btnStyle = 'button';
  }

  getAlumno(){
    this.hasVoted = false
    var fueVotado = false
    this.arrEleccionesAVotar =[]
    this.db.database.ref(`database/${this.matriculaAlumno}/`).once('value').then(snap=>{
        // this.alumnoExist = true
        var arrAuxElecciones : Array<any> = [];
        this.carreraAlumno = snap.val().major
        this.estadoAlumno = snap.val().state
        this.nombreAlumno = snap.val().fname

        // if(this.alumnoExist){

      this.db.database.ref('2018Semestre2').once('value').then(snap=>{
        snap.forEach(element => {
          // Elecion de carreras - bloque CSA
          if(element.val().inProgress === true && element.val().type === "csa"){
            var actualBloque = element.val().name
            // this.bloque = element.val().name
            console.log(this.bloque)
            this.db.database.ref(`2018Semestre2/${actualBloque}/Elecciones`).once('value').then(snap=>{
              snap.forEach(element => {
                console.log(element.val().name);
                  this.arrCarreras = element.val().carreras;
                  for(let carrera of this.arrCarreras){
                    if(carrera === this.carreraAlumno){
                      fueVotado = false
                      console.log(element.val().name);
                      this.searchiIfVoted(this.matriculaAlumno,actualBloque,element.val().name).then((result) =>{
                        if(result === "true"){
                          fueVotado = true;
                          console.log("SI JALOOOOO" + fueVotado)
                        }
                        arrAuxElecciones.push({eleccion: element.val().name, bloque: actualBloque, isVoted: fueVotado});
                        console.log(arrAuxElecciones);
                      });

                    }
                  }
                });
            });
            // Eleccion general de Comite Ejecutivo FETEC
          }else if(element.val().inProgress === true && element.val().type === "ejecutivo"){
              this.db.database.ref(`2018Semestre2/${element.val().name}`).once('value').then(snap=>{
                this.searchiIfVoted(this.matriculaAlumno, element.val().name, snap.val().name).then((result) =>{
                  fueVotado = false
                  if(result === "true"){
                    fueVotado = true;
                    console.log("SI JALOOOOO" + fueVotado)
                  }
                  arrAuxElecciones.push({eleccion: element.val().name, bloque: snap.val().name, isVoted: fueVotado});
                  console.log(arrAuxElecciones);
                });
              });

            // Eleccion general de CARES
          }else if(element.val().inProgress === true && element.val().type === "care"){
              var nombreBloqueCare = element.val().name
              console.log(nombreBloqueCare)
              this.db.database.ref(`2018Semestre2/${element.val().name}/Elecciones`).once('value').then(snap=>{
                snap.forEach(element => {
                  this.estado = element.val().estado;
                  if(this.estado === this.estadoAlumno){
                    fueVotado = false
                    this.searchiIfVoted(this.matriculaAlumno, nombreBloqueCare, element.val().name).then((result) =>{
                      if(result === "true"){
                        fueVotado = true;
                        console.log("SI JALOOOOO" + fueVotado)
                      }
                      arrAuxElecciones.push({eleccion: element.val().name, bloque: nombreBloqueCare, isVoted: fueVotado});
                      console.log(arrAuxElecciones);
                    });
                  }
                });
              });

          }else{
            console.log("No hay elecciones disponibles para este usuario");
          }

        });
      });
      console.log(arrAuxElecciones);
      this.arrEleccionesAVotar = arrAuxElecciones;
    });
  }

  markAsVoted(eleccion,bloque){
    this.votandoPara = eleccion
    this.hasVoted = false
    this.db.database.ref(`2018Semestre2/${bloque}/Elecciones/${this.votandoPara}/votados/${this.matriculaAlumno}`).once('value').then(snap=>{
      if(snap.exists()){
        this.hasVoted = true
      }else{
        console.log("no ha votado")
        if(this.hasVoted == false){
          // Marcar el voto como registrado
          this.db.database.ref(`2018Semestre2/${bloque}/Elecciones/${this.votandoPara}/votados/${this.matriculaAlumno}`).set({
            timestamp : new Date().toString(),
            key : this.matriculaAlumno
          });

          this.db.database.ref(`2018Semestre2/${bloque}/Elecciones/${this.votandoPara}`).once('value').then(snap=>{
            this.db.database.ref(`2018Semestre2/${bloque}/Elecciones/${this.votandoPara}`).update({votos: snap.val().votos+1});
          });
          // this.btnStyle = 'button-voted';
        }
      }
    });
    this.getAlumno();
  }

  searchiIfVoted(matricula,bloque,eleccion) {
    var filterDataAccordingToDatePromise = new Promise((resolve, reject) =>{
      this.db.database.ref(`2018Semestre2/${bloque}/Elecciones/${eleccion}/votados/${matricula}`).once('value').then(snap=>{
        if(snap.exists()){
          resolve("true")
        }else{
          resolve("false")
        }
      });
    });
    return filterDataAccordingToDatePromise;
  }

}
