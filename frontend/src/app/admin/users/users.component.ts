import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddRoleDialogComponent } from "./add-role-dialog/add-role-dialog.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['key', 'fname', 'major', 'role','state'];
  dataSource : any;
  result : string;

  constructor(public dialog: MatDialog, private db : AngularFireDatabase) { }

  ngOnInit() {
    this.fetchDb();
  }

  openDialog(row) {
    let dialogRefBloque = this.dialog.open(AddRoleDialogComponent, {
      width: '600px',
      data: {row}
    });
    dialogRefBloque.afterClosed().subscribe(result => {
      this.fetchDb();
    });
  }

  fetchDb(){
    this.db.database.ref('database').once('value').then(snap=>{
      var arrDB = [];
      snap.forEach(element => {
        arrDB.push({
          key : element.key,
          fname : element.val().fname,
          major : element.val().major,
          role : element.val().roll,
          state : element.val().state
        })
      });
      this.dataSource = new MatTableDataSource(arrDB);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
