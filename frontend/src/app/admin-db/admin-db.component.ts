import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-admin-db',
  templateUrl: './admin-db.component.html',
  styleUrls: ['./admin-db.component.css']
})
export class AdminDbComponent implements OnInit {
  arrayBuffer : any;
  filteredData = [];
  file:File;
  excelData : any;

incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
          this.filterData(XLSX.utils.sheet_to_json(worksheet,{raw:true}))
        }
        fileReader.readAsArrayBuffer(this.file);
}



  constructor(se) { }

  ngOnInit() {
  }

}
