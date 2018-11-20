import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AngularFireDatabase } from "@angular/fire/database";

export interface DialogData {

}

@Component({
  selector: 'app-eleccion-dialog',
  templateUrl: './eleccion-dialog.component.html',
  styleUrls: ['./eleccion-dialog.component.css']
})
export class EleccionDialogComponent implements OnInit {

  majorsFormControl = new FormControl();
  name : "";
  majors : Array<string> = [];
  // selectedMajors : Array<string> =[];

  constructor(public dialogRef: MatDialogRef<EleccionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public result: DialogData, private db : AngularFireDatabase) { }

  ngOnInit() {
    this.fetchMajors();
  }

  fetchMajors(){
    this.db.database.ref('majors').once('value').then(snap=>{
      snap.forEach(element => {
        this.majors.push(element.val().name)
      })
    })
  }

  agregareleccion(){
    var arrElecciones = this.majorsFormControl.value
    this.dialogRef.close({
      name: this.name,
      carreras: arrElecciones,
    });

  }

}
