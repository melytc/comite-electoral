import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EleccionDialogComponent } from '../../eleccion-dialog/eleccion-dialog.component'

import { BloqueDialogComponent } from '../../bloque-dialog/bloque-dialog.component'
import { AngularFireDatabase } from '@angular/fire/database'
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-admin-grid',
  templateUrl: './admin-grid.component.html',
  styleUrls: ['./admin-grid.component.css']
})
export class AdminGridComponent implements OnInit {
  result : string;
  constructor(public dialog: MatDialog ,private db : AngularFireDatabase) { }
  bloquesJson : any;
  selectedBloque : string;
  selectedGrupo : string;
  bloques = [];
  elecciones = [];
  displayedColumnsBloques: string[] = ['name'];
  displayedColumnsElecciones: string[] = ['name'];


  ngOnInit() {
    this.fetchInfo();
  }

  openDialog() {
    let dialogRefBloque = this.dialog.open(BloqueDialogComponent, {
      width: '600px',
      data: {name: this.result}
    });
    dialogRefBloque.afterClosed().subscribe(result => {
      this.db.database.ref(`2018Semestre2/${result.name}/`).set({
        name : String(result.name),
        startDate : String(result.startDate),
        finishDate : String(result.finishDate),
        type : String(result.type),
        inProgress: true
      })
    });
  }

  openDialogGrupos(){
    let dialogRefEleccion = this.dialog.open(EleccionDialogComponent, {
      width: '600px',
      data: {name: this.result}
    });
    dialogRefEleccion.afterClosed().subscribe(result => {
      console.log(result);
      this.result = result;

      this.db.database.ref(`2018Semestre2/${this.selectedBloque}/Elecciones/${result.name}`).set({
        name : String(result.name),
        inProgress: true,
        votos : 0,
        carreras : result.carreras,
      }).then(()=>{
        this.fetchInfo();
        this.refreshBloques();
      })
    });
  }

  selectRow(row){
    this.elecciones = [];
    this.selectedBloque = row.name;
    if(this.bloquesJson[this.selectedBloque].Elecciones){
      var elec = this.bloquesJson[row.name].Elecciones;
      for (const key in elec) {
        if (elec.hasOwnProperty(key)) {
          this.elecciones.push({
            name:key
          });
        }
      }
      console.log(this.elecciones);
    }
  }

  fetchInfo(){
    this.db.database.ref("2018Semestre2").on("value",(snap)=>{
      this.bloquesJson = snap.val();
      this.bloques = [];
      snap.forEach((element)=>{
        this.bloques.push({
          name : element.key,
          startDate : element.val().startDate,
          finishDate : element.val().finishDate
        })
      })
      console.log(this.bloques)
    })
  }

  refreshBloques(){
    if(this.bloquesJson[this.selectedBloque].Elecciones){
      var elec = this.bloquesJson[this.selectedBloque].Elecciones;
      for (const key in elec) {
        if (elec.hasOwnProperty(key)) {
          this.elecciones.push({
            name:key
          });
        }
      }
      console.log(this.elecciones);
    }
  }

}
