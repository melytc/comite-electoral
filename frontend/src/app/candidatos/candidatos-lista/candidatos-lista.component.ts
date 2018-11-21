import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirebaseDatabase } from '@angular/fire';
import {CandidatosDetalleComponent } from "../candidatos-detalle/candidatos-detalle.component";

@Component({
  selector: 'admin/candidatos-lista',
  templateUrl: './candidatos-lista.component.html',
  styleUrls: ['./candidatos-lista.component.css']
})
export class CandidatosListaComponent implements OnInit {

  displayedColumnsLista: string[] = ['key', 'nombresPresidente', 'nombresVice'];

  dataSourceLista : any;


  constructor(public dialog : MatDialog, private db : AngularFireDatabase) { }

  ngOnInit() {
    this.fetchDB();
  }

  openDialog(row, candidatura) {
    let dialogRefCand = this.dialog.open(CandidatosDetalleComponent, {
      width: '700px',
      data: {row,candidatura}
    });
    dialogRefCand.afterClosed().subscribe(result => {
      this.fetchDB();
    });
  }

  fetchDB() {
    this.db.database.ref('candidaturas').once('value').then(snap=>{
      var arrDB = [];
      snap.forEach(element => {
        arrDB.push({
          key : element.key,
          nombresPresidente : element.val().nombresPresidente,
          nombresVice : element.val().nombresVice
        })
      });
      console.log(arrDB);
      this.dataSourceLista = new MatTableDataSource(arrDB);
    })
  }

}
