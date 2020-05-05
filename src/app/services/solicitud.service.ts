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

  obtenerSolicitud( ) {
    let url = URL_SERVICE.url + '/solicitud';

    return this.http.get(url)
        .pipe( 
          map(this.crearArreglo)
        );
  }

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

