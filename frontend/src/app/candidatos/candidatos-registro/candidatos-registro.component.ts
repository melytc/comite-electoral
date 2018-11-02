import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'candidatos-registro',
  templateUrl: './candidatos-registro.component.html',
  styleUrls: ['./candidatos-registro.component.css']
})
export class CandidatosRegistroComponent implements OnInit {
  
  firstFormGroup : FormGroup;
  secondFormGroup : FormGroup;
  thirdFormGroup : FormGroup;

  constructor(private _formBuilder : FormBuilder) { }

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
  }
}
