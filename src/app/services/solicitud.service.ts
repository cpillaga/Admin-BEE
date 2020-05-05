import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../models/solicitud/solicitud.model';
import { URL_SERVICE } from '../config/config';
import swal from 'sweetalert';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(
    private http: HttpClient
  ) {

  }

  /*=========================
    Aquí obtengo los valores de la Base de Datos
  =========================*/ 
  obtenerSolicitud( ) {
    let url = URL_SERVICE.url + '/solicitud';

    return this.http.get(url)
        .pipe( 
          map(this.crearArreglo)
        );
  }

  /*=========================
    Aquí creo un arreglo de la Base de datos y del socket
  =========================*/
  crearArreglo ( solicitudObj: object){

    const solicitud: Solicitud[] = [];

    if (solicitudObj === null){
      return [];
    }

    Object.keys( solicitudObj ).forEach( key => {
      const sol: Solicitud = solicitudObj[key];

      solicitud.push(sol);
    });

    return solicitud;
  }
}

