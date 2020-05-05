import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.model';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import {Router} from "@angular/router";

import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  formaReg: FormGroup;

  sonIguales(campo1: string, campo2: string){
    return(group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1 === pass2){
        return null;
      }

      return{
        sonIguales: true
      };
    };
  }

  constructor(
     public _usuarioServicio: UsuarioService,
     private router: Router
  ){ }

  ngOnInit() {
    this.formaReg = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      passwordConf: new FormControl(null, Validators.required),
      condiciones: new FormControl( false )
    }, {validators: this.sonIguales('password', 'passwordConf')});
  }

  public registrarUser(){
    
    if(this.formaReg.invalid){
      return;
    }
    
    if(!this.formaReg.value.condiciones){
      swal('Importante', 'Debe aceptar condiciones', 'warning');
      
      return;
    }
    
    let usuario = new Usuario(
      this.formaReg.value.nombre,
      this.formaReg.value.email,
      this.formaReg.value.password
    );
  
    this._usuarioServicio.crearUsuario(usuario)
          .subscribe(resp => this.router.navigate(['/login']));
  }

}
