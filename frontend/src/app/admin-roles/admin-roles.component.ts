import { Component, OnInit } from '@angular/core';

export interface ResultadosUsuarios {
	matricula: string;
	nombre: string;
	rol: string;
  }

const ELEMENT_DATA: ResultadosUsuarios[] = [
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
	{matricula: 'A00816715', nombre: 'Melissa Janet Treviño Caballero', rol: 'Administrador'},
];

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.css']
})
export class AdminRolesComponent implements OnInit {
	displayedColumns: string[] = ['matricula', 'nombre', 'rol'];
	dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
