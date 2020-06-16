import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { Usuario } from '../models/usuario/usuario.model';
import swal from 'sweetalert';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService{
    constructor(
        private http: HttpClient
    ) { }

    loginUsuario(usuario: Usuario, recordar: boolean = false) {
        
        if(recordar){
            localStorage.setItem('email', usuario.email);
        }else{
            localStorage.removeItem('email');
        }
        
        const url = 'https://bee.com.ec/administrator/login';

        return this.http.post( url, usuario )
                    .map( (resp: any) => {
                        localStorage.setItem('id', resp.id);
                        localStorage.setItem('token', resp.token);
                        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

                        return true;
                    });
    }

    crearUsuario(usuario: Usuario){
        const url = URL_SERVICE.url + '/usuario';

        return this.http.post(url, usuario)
                    .map( (resp: any) => {
                        swal('Usuario Creado', usuario.email, 'success');
                        return resp.usuario;
                    });
    }
}