import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {

}

@Component({
  selector: 'app-eleccion-dialog',
  templateUrl: './eleccion-dialog.component.html',
  styleUrls: ['./eleccion-dialog.component.css']
})
export class EleccionDialogComponent implements OnInit {


  name : "";
  
  constructor(public dialogRef: MatDialogRef<EleccionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public result: DialogData) { }

  ngOnInit() {
  }

  agregareleccion(){
    this.dialogRef.close({
      name: this.name,
    });

  }

}
