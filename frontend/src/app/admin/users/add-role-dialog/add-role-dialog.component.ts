import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AngularFireDatabase } from "@angular/fire/database";
export interface DialogData {

}

@Component({
  selector: 'app-add-role-dialog',
  templateUrl: './add-role-dialog.component.html',
  styleUrls: ['./add-role-dialog.component.css']
})
export class AddRoleDialogComponent implements OnInit {

  nombre : string;
  matricula : string;
  major : string;
  estado : string;
  selectedRol : string;
  roles: any[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'asesor', viewValue: 'Asesor'},
    {value: 'usuario', viewValue: 'Usuario'}
  ];

  constructor(public dialogRef: MatDialogRef<AddRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public result: DialogData, private db : AngularFireDatabase) { }

  ngOnInit() {
    console.log(this.result)
    this.nombre = this.result['row']['fname'];
    this.matricula = this.result['row']['key'];
    this.major = this.result['row']['major'];
    this.estado = this.result['row']['state'];
    this.selectedRol = this.result['row']['role'];

  }

  agregarRol(){
    console.log(this.selectedRol);
    if (this.selectedRol) {
      this.db.database.ref(`roles/${this.matricula}`).set({
        rol:this.selectedRol,
        date: Date.now()
      })
      this.db.database.ref(`database/${this.matricula}`).update({roll:this.selectedRol});
      this.dialogRef.close({
      });
    }else{
      alert("Debe seleccionar un rol");
    }
    
  }

}
