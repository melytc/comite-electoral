import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-dashboard-elecciones',
  templateUrl: './dashboard-elecciones.component.html',
  styleUrls: ['./dashboard-elecciones.component.css']
})
export class DashboardEleccionesComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
     this.databaseService.getElecciones().subscribe(elecciones => {
      console.log(elecciones);
    });
  }

}
