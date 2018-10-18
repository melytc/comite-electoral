import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-asesor',
  templateUrl: './nav-bar-asesor.component.html',
  styleUrls: ['./nav-bar-asesor.component.css']
})
export class NavBarAsesorComponent implements OnInit {

  constructor(private auth : AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.auth.signOut().then(()=>{
      this.router.navigateByUrl('login');
    })
  }

}
