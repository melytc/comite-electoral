import {Component,OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {

}


@Component({
  selector: 'app-bloque-dialog',
  templateUrl: './bloque-dialog.component.html',
  styleUrls: ['./bloque-dialog.component.css']
})
export class BloqueDialogComponent implements OnInit {

  startDate : "";
  finishDate : "";
  nombre : "";
  type : "";

  constructor(public dialogRef: MatDialogRef<BloqueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public result: DialogData) { }


  ngOnInit() {
  }

  agregarbloque(){
    this.dialogRef.close({
      name: this.nombre,
      startDate : this.startDate,
      finishDate : this.finishDate,
      type: this.type
    });

  }

}
