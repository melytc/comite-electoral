import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-bloques-registro',
  templateUrl: './admin-bloques-registro.component.html',
  styleUrls: ['./admin-bloques-registro.component.css']
})
export class AdminBloquesRegistroComponent implements OnInit {

  nombreBloque : string;
  arrDataBloques : Array<any> = [];
  estado : string; // para validar si el bloque esta activo para recivir registros o no
  type: string;

  constructor(private db : AngularFireDatabase, private router : Router) { }

  ngOnInit() {
    this.fetchBloques();
  }

  fetchBloques(){
    this.db.database.ref(`Bloques de registro/2018/Ago-Dic`).once('value').then(snap=>{
      snap.forEach(element => {
        var arrGruposEstudiantiles : Array<string> = []
        this.nombreBloque = element.val().name
        this.type = element.val().type
        this.db.database.ref(`Bloques de registro/2018/Ago-Dic/${this.nombreBloque}/Elecciones`).once('value').then(snap=>{
          snap.forEach(element => {
            arrGruposEstudiantiles.push(element.val().name)
          });
        });
         this.arrDataBloques.push({name: this.nombreBloque, type: this.type, gruposEstudiantiles: arrGruposEstudiantiles})
         console.log(this.arrDataBloques)
      });
    });
  }


}
