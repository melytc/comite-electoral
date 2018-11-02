import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
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
  presidente : any;
  vice : any;
  uploadPercentCarta : any;
  uploadPercentComprobante : any;
  uploadPercentLicencia : any;
  downloadURLCarta: any;
  downloadURLComprobante: any;
  downloadURLLicencia: any


  constructor(private _formBuilder : FormBuilder,private storage: AngularFireStorage) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl : ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl : ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl : ['', Validators.required]
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

  terminar(){
    
  }

  carta(event){
    const fileCarta = event.target.files[0];
    const filePath = 'candidatura';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, fileCarta);

    // observe percentage changes
    this.uploadPercentCarta = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURLCarta = fileRef.getDownloadURL() )
     )
    .subscribe()
    }
  

  comprobante(event){
    const fileComprobante = event.target.files[0];
    const filePath = 'candidatura';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, fileComprobante);

    // observe percentage changes
    this.uploadPercentComprobante = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURLComprobante = fileRef.getDownloadURL() )
     )
    .subscribe()
  }

  licencia(event){
    const fileLicencia = event.target.files[0];
    const filePath = 'candidatura';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, fileLicencia);

    // observe percentage changes
    this.uploadPercentLicencia = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURLLicencia = fileRef.getDownloadURL()
          alert("La licencia se ha subido")
        })
     )
    .subscribe()
  }
}
