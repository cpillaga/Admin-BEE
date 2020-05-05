import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SolicitudService } from './solicitud.service';
import { Solicitud } from '../models/solicitud/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;
  solPendientes: Solicitud[] = [];

  constructor(
    private socket: Socket,
    private _solServer: SolicitudService
  ) { 
    this.checkStatus();
  }


  socketSol(){
    this.socket.on('sendMensaje', (resp) =>{
      this.solPendientes = this._solServer.crearArreglo(resp);
    });

    console.log(this.solPendientes);
    return this.solPendientes;
  }


  checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
    
  }

}
