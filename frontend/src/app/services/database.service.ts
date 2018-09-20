import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/';
import { Eleccion } from '../models/eleccion';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  eleccionesCollection: AngularFirestoreCollection<Eleccion>;
  elecciones: Observable<Eleccion[]>;

  constructor(public afs: AngularFirestore) {
    this.eleccionesCollection = this.afs.collection('elecciones');
    this.elecciones = this.eleccionesCollection.valueChanges();

  }

  getElecciones(){
    return this.elecciones;
  }

}
