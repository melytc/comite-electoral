import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'candidatos-registro',
  templateUrl: './candidatos-registro.component.html',
  styleUrls: ['./candidatos-registro.component.css']
})
export class CandidatosRegistroComponent implements OnInit {

  firstFormGroup : FormGroup;
  secondFormGroup : FormGroup;
  thirdFormGroup : FormGroup;
  currentUser : any;
  candidatura: any;
  presidente : any;
  vice : any;
  uploadPercentCarta : any;
  uploadPercentComprobante : any;
  uploadPercentLicencia : any;
  downloadURLCarta: any;
  downloadURLComprobante: any;
  downloadURLLicencia: any
  arrAvailableGruposEstudiantiles : Array<string> = [];
  arrMajors : Array<string> = [];

  bloqueIsSelected: boolean;
  isSubmitted: boolean;
  nombreBloque : string;
  selectedBloque : string;
  arrDataBloques : Array<any> = [];
  estado : string; // para validar si el bloque esta activo para recivir registros o no
  type: string;

  constructor(private _formBuilder : FormBuilder,private storage: AngularFireStorage, private auth : AngularFireAuth, private db : AngularFireDatabase) {
     auth.auth.onAuthStateChanged(user=>{
      this.currentUser = user;
    })
   }

  ngOnInit() {

    this.bloqueIsSelected = false;
    this.isSubmitted = false;
    this.fetchBloques();
    this.fetchMajors();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl : ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl : ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl : ['', Validators.required]
    });

    this.candidatura = new FormGroup({
      grupoEstudiantil: new FormControl('',[Validators.required]),
      nombreCandidatura: new FormControl('',[Validators.required]),
      periodo: new FormControl('',[Validators.required]),
    });
    this.presidente = new FormGroup({
      carreraPresidente: new FormControl('', [Validators.required]),
      nombresPresidente: new FormControl('', [Validators.required]),
      apellidosPresidente: new FormControl('', [Validators.required]),
      semestrePresidente: new FormControl('', Validators.required),
      promedioPresidente: new FormControl('', Validators.required),
      celularPresidente: new FormControl('', Validators.required),
      matriculaPresidente: new FormControl('', Validators.required),
      emailPresidente: new FormControl('', Validators.required),
    });
    this.vice = new FormGroup({
      carreraVice: new FormControl('', [Validators.required]),
      nombresVice: new FormControl('', [Validators.required]),
      apellidosVice: new FormControl('', [Validators.required]),
      semestreVice: new FormControl('', Validators.required),
      promedioVice: new FormControl('', Validators.required),
      celularVice: new FormControl('', Validators.required),
      matriculaVice: new FormControl('', Validators.required),
      emailVice: new FormControl('', Validators.required),
    });
  }

  fetchMajors(){
    this.db.database.ref('majors').once('value').then(snap=>{
      snap.forEach(element => {
        this.arrMajors.push(element.val().name)
      })
    })
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

  selectBloque(bloque){
    this.bloqueIsSelected = true;
    this.selectedBloque = bloque
    for(let bloque of this.arrDataBloques){
      if(bloque.name === this.selectedBloque){
        this.arrAvailableGruposEstudiantiles = bloque.gruposEstudiantiles;
      }
    }
  }

  terminar(){
    // this.db.database.ref(`candidatura`).push({
    //   nombrePresidente:"Miguel Cuellar",
    //   nombresVice:"Carmelo Ramirez",
    //   carta:this.downloadURLCarta,
    //   comprobante:this.downloadURLComprobante,
    //   licencia:this.downloadURLLicencia
    // })
    var datosRegistro = {
      ...this.candidatura.value,
      ...this.presidente.value,
      ...this.vice.value,
      bloque : this.selectedBloque
    };
    var aux = false
    console.log(datosRegistro);
    datosRegistro.carta = this.downloadURLCarta;
    datosRegistro.comprobante = this.downloadURLComprobante;
    datosRegistro.licencia = this.downloadURLLicencia;
    this.pushRegistro(datosRegistro).then((result) =>{
      if(result === "true"){
        aux = true;
      }
      this.isSubmitted = aux;
    });
  }

  pushRegistro(datosRegistro) {
    var promise = new Promise((resolve, reject) =>{
      this.db.database.ref(`candidaturas/${this.currentUser.uid}`).set(datosRegistro,
        function(error) {
        if (!error) {
          resolve("true")
          console.log("promise successfull")
        } else {
          resolve("false")
        }
      });
    });
    return promise;
  }

  carta(event){
    const fileCarta = event.target.files[0];
    const filePath = `carta${this.currentUser.uid}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, fileCarta);

    // observe percentage changes
    this.uploadPercentCarta = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.downloadURLCarta = url
          })
        })
     )
    .subscribe()
    }


  comprobante(event){
    const fileComprobante = event.target.files[0];
    const filePath = `comprobante${this.currentUser.uid}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, fileComprobante);

    // observe percentage changes
    this.uploadPercentComprobante = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.downloadURLComprobante = url
          })
        })
     )
    .subscribe()
  }

  licencia(event){
    const fileLicencia = event.target.files[0];
    const filePath = `licencia${this.currentUser.uid}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, fileLicencia);

    // observe percentage changes
    this.uploadPercentLicencia = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.downloadURLLicencia = url;
            console.log(url);
          })
        })
     )
    .subscribe()
  }
}
