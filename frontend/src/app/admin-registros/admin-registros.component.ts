import { Component, OnInit } from '@angular/core';

export interface Candidaturas {
	numCandidatura: number;
	grupoEstudiantil: string;
	nombreCandidatura: string;
	estatusCandidatura: string;
	detalleCandidatura: string; // esto más bien depende de cómo lo quieren guardar/manejar
  }

// Datos estáticos, cambiar cuando lo conecten con el backend.
// @Poncho: ¿nos puedes explicar los valores posibles de estatus?
const ELEMENT_DATA: Candidaturas[] = [
	{numCandidatura: 1, grupoEstudiantil: 'Sociedad de Alumnos de ITC', nombreCandidatura: 'Switch', estatusCandidatura: 'Cancelado', detalleCandidatura: 'TBD'},
	{numCandidatura: 2, grupoEstudiantil: 'Sociedad de Alumnos de INT', nombreCandidatura: 'All Possible', estatusCandidatura: 'Modificación', detalleCandidatura: 'TBD'},
	{numCandidatura: 3, grupoEstudiantil: 'Sociedad de Alumnos de I2D', nombreCandidatura: 'Reinventa', estatusCandidatura: 'Baja', detalleCandidatura: 'TBD'},
	{numCandidatura: 4, grupoEstudiantil: 'Sociedad de Alumnos de ITC', nombreCandidatura: 'Reboot', estatusCandidatura: 'Aceptado', detalleCandidatura: 'TBD'},
	{numCandidatura: 5, grupoEstudiantil: 'Sociedad de Alumnos de INT', nombreCandidatura: 'SAINTs', estatusCandidatura: 'Esperando revisión', detalleCandidatura: 'TBD'},
];

@Component({
  selector: 'app-admin-registros',
  templateUrl: './admin-registros.component.html',
  styleUrls: ['./admin-registros.component.css']
})

export class AdminRegistrosComponent implements OnInit {
	displayedColumns: string[] = ['numCandidatura', 'grupoEstudiantil', 'nombreCandidatura', 'estatusCandidatura', 'detalleCandidatura'];
	dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
