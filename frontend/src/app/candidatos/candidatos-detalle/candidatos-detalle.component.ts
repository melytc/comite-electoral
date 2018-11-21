import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AngularFireDatabase } from "@angular/fire/database";
import {MatTableDataSource} from '@angular/material';
export interface DialogData {

}
@Component({
  selector: 'app-candidatos-detalle',
  templateUrl: './candidatos-detalle.component.html',
  styleUrls: ['./candidatos-detalle.component.css']
})
export class CandidatosDetalleComponent implements OnInit {

  
  idCandidatura : string;
  apellidosPresidente :string;
  apellidosVice:string;
  bloque: string;
  carreraPresidente : string;
  carreraVice : string;
  carta : string;
  celularPresidente : string;
  celularVice : string;
  comprobante : string;
  emailPresidente : string;
  emailVice : string;
  grupoEstudiantil : string;
  licencia : string;
  matriculaPresidente : string;
  matriculaVice: string;
  nombreCandidatura : string;
  nombresPresidente : string;
  nombresVice : string;
  periodo : boolean;
  promedioPresidente : string;
  promedioVice : string;
  semestrePresidente : string;
  semestreVice : string;

  periodoEneDic : boolean;
  periodoAgtMay : boolean;
  constructor(public dialogRef: MatDialogRef<CandidatosDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public result: DialogData, private db : AngularFireDatabase) { }

  ngOnInit() {
    this.idCandidatura = this.result['row']['key'];
    console.log(this.idCandidatura);
    this.db.database.ref(`candidaturas/${this.idCandidatura}`).once('value').then(snap=>{
          this.apellidosPresidente = snap.val().apellidosPresidente;
          this.apellidosVice = snap.val().apellidosVice;
          this.bloque = snap.val().bloque;
          this.carreraPresidente = snap.val().carreraPresidente;
          this.carreraVice= snap.val().carreraVice;
          this.carta = snap.val().carta;
          this.celularPresidente = snap.val().celularPresidente;
          console.log(this.celularPresidente);
          this.celularVice = snap.val().celularVice;
          this.comprobante = snap.val().comprobante;
          console.log(this.comprobante);
          this.emailPresidente = snap.val().emailPresidente;
          this.emailVice = snap.val().emailVice;
          this.grupoEstudiantil = snap.val().grupoEstudiantil;
          this.licencia = snap.val().licencia;
          this.matriculaPresidente = snap.val().matriculaPresidente;
          this.matriculaVice = snap.val().matriculaVice;
          this.nombreCandidatura = snap.val().nombreCandidatura;
          this.nombresPresidente = snap.val().nombresPresidente;
          this.nombresVice = snap.val().nombresVice;
          this.periodo = snap.val().periodo;
          this.promedioPresidente = snap.val().promedioPresidente;
          this.promedioVice = snap.val().promedioVice;
          this.semestreVice = snap.val().semestreVice;
          this.semestrePresidente = snap.val().semestrePresidente;
    })
  }

}
