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

  matriculaAlumno : string;
  carreraAlumno : string;
  estadoAlumno : string;
  nombreAlumno : string;

  bloque : string;
  arrCarreras : string[];
  arrEleccionesAVotar = [];
  estado : string;
  alumnoExist = false;

  idFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private db : AngularFireDatabase, private router : Router) { }

  ngOnInit() {
  }

  getAlumno(){
    this.arrEleccionesAVotar = [];
    // this.carreraAlumno = ""
    // this.estadoAlumno = ""
    // this.nombreAlumno = ""
    // this.alumnoExist = false

    this.db.database.ref(`database/${this.matriculaAlumno}/`).once('value').then(snap=>{

        // this.alumnoExist = true
        this.carreraAlumno = snap.val().major
        this.estadoAlumno = snap.val().state
        this.nombreAlumno = snap.val().fname

    });

    // if(this.alumnoExist){
        this.db.database.ref('2018Semestre2').once('value').then(snap=>{
          snap.forEach(element => {
            // Elecion de carreras - bloque CSA
            if(element.val().inProgress === true && element.val().type === "csa"){
              this.bloque = element.val().name
              this.db.database.ref(`2018Semestre2/${this.bloque}/Elecciones`).once('value').then(snap=>{
                snap.forEach(element => {
                  this.arrCarreras = element.val().carreras;

                  for(let carrera of this.arrCarreras){
                    if(carrera === this.carreraAlumno){
                      console.log(element.val().name);
                      this.arrEleccionesAVotar.push(element.val().name);
                      console.log(this.arrEleccionesAVotar);
                    }
                  }
                })
              });
              // Eleccion general de Comite Ejecutivo FETEC
            }else if(element.val().inProgress === true && element.val().type === "ejecutivo"){
                this.bloque = element.val().name
                this.db.database.ref(`2018Semestre2/${this.bloque}`).once('value').then(snap=>{
                  this.arrEleccionesAVotar.push(snap.val().name)
                });


            // Eleccion general de CARES
            }else{
                this.bloque = element.val().name
                this.db.database.ref(`2018Semestre2/${this.bloque}/Elecciones`).once('value').then(snap=>{
                  snap.forEach(element => {
                    this.estado = element.val().estado;
                    if(this.estado === this.estadoAlumno){
                      this.arrEleccionesAVotar.push(element.val().name);
                      console.log(this.arrEleccionesAVotar);
                    }

                  })
                });

            }

          });
        });
    // }
  }

}
