export interface Eleccion {
  id?:string;
  tipo?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  periodo?:{
    año?: number;
    semestre?: string;
  };
  padron?:[
    {
      carrera?: string;
      grupo?:{
        grupoEstudiantil?: string;
        carreras?:{
          carrera?: string;
      };
      }
    }
  ];
}
