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
  newUser : boolean;
  roles: any[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'asesor', viewValue: 'Asesor'},
    {value: 'usuario', viewValue: 'Usuario'}
  ];

  constructor(public dialogRef: MatDialogRef<AddRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public result: DialogData, private db : AngularFireDatabase) { }

  ngOnInit() {
    console.log(this.result)
    this.newUser = this.result['newUser'];
    if(this.newUser === true){
      this.nombre = this.result['row']['fname'];
      this.matricula = this.result['row']['key'];
      this.major = this.result['row']['major'];
      this.estado = this.result['row']['state'];
      this.selectedRol = this.result['row']['role'];
    }

  }

  agregarRol(){
    console.log(this.selectedRol);
    if(this.newUser === true){
      if (this.selectedRol) {
        this.db.database.ref(`roles/${this.matricula}`).set({
          key : this.matricula,
          fname : this.nombre,
          major : this.major,
          role : this.selectedRol,
          state : this.estado
        })
        this.db.database.ref(`database/${this.matricula}`).update({roll:this.selectedRol});
        this.dialogRef.close({
        });
      }else{
        alert("Debe seleccionar un rol");
      }
    }else{
      // this.matricula = document.getElementById('matricula').value;
      // this.nombre = document.getElementById('nombre').value;
      // this.major = document.getElementById('major').value;
      //this.selectedRol = document.getElementById('').value;
      // this.estado = document.getElementById('estado').value;

      this.db.database.ref(`roles/${this.matricula}`).set({
        key : this.matricula,
        fname : this.nombre,
        major : this.major,
        role : this.selectedRol,
        state : this.estado
      })

      this.db.database.ref(`database/${this.matricula}`).set({
        key : this.matricula,
        fname : this.nombre,
        major : this.major,
        roll : this.selectedRol,
        state : this.estado
      })

      this.dialogRef.close({
      });
    }
  }

}
