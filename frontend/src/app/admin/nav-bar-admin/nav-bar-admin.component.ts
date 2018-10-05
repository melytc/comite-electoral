import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {

  constructor(private auth : AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.auth.signOut().then(()=>{
      this.router.navigateByUrl('login');
    })
  }


}
