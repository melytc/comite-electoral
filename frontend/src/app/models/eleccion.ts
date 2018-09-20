export interface Eleccion {
  id?:string;
  tipo?: string;
  fechaInicio?: date;
  fechaFin?: date;
  periodo?:{
    año?: number;
    semestre?: string;
  };
  padron?:[
    {
      carrera?: string;
      grupo?:{
        grupoEstudiantil?: string;
        carreras?:[
          carrera?: string;
        ];
      }
    }
  ];
}
