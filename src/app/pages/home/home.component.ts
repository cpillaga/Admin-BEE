import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

// import { Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/solicitud/solicitud.model';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public solicitud: Solicitud;

  solPendientes: Solicitud[] = [];

  constructor(
    public _solicitudServicio: SolicitudService,
    public _webSocket: WebSocketService
  ) { }
  
  ngOnInit() {
    this._solicitudServicio.obtenerSolicitud()
      .subscribe( resp =>  {
        this.solPendientes = resp;
      } );

  }

  /*=========================
  Aqui se supone que que quiero actualizar la data en el div del html
  =========================*/
  updateSol(){
    this.solPendientes = this._webSocket.socketSol();
  }
}
