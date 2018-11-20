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
  displayedColumnsUsers: string[] = ['key', 'fname', 'major', 'role','state'];
  displayedColumnsRegistered: string[] = ['key', 'fname', 'major', 'role','state'];
  displayedColumnsRegisteredUsers: string[] = ['key','email'];

  dataSourceUsers : any;
  dataSourceRegistered : any;
  dataSourceRegisteredUsers : any;
  result : string;

  constructor(public dialog: MatDialog, private db : AngularFireDatabase) { }

  ngOnInit() {
    this.fetchDb();
  }

  openDialog(row,newUser) {
    let dialogRefBloque = this.dialog.open(AddRoleDialogComponent, {
      width: '600px',
      data: {row,newUser}
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
      this.dataSourceUsers = new MatTableDataSource(arrDB);
    })

    this.db.database.ref('roles').once('value').then(snap=>{
      var arrDB = [];
      snap.forEach(element => {
        arrDB.push({
          key : element.key,
          fname : element.val().fname,
          major : element.val().major,
          role : element.val().role,
          state : element.val().state
        })
      });
      this.dataSourceRegistered = new MatTableDataSource(arrDB);
    })

    this.db.database.ref('registrados').once('value').then(snap=>{
      var arrDB = [];
      snap.forEach(element => {
        arrDB.push({
          key : element.key,
          email : element.val().email,
          uid : element.val().uid
        })
      });
      this.dataSourceRegisteredUsers = new MatTableDataSource(arrDB);
    })

  }

  applyFilterUsers(filterValue: string) {
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
  }

  applyFilterRoles(filterValue: string) {
    this.dataSourceRegistered.filter = filterValue.trim().toLowerCase();
  }

  applyFilterRegisteredUsers(filterValue: string) {
    this.dataSourceRegisteredUsers.filter = filterValue.trim().toLowerCase();
  }
}
