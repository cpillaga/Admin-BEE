import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'CRUD';
  public usuario: Usuario;
  public identity;
  public token;

  recuerdame: boolean = false;
  email: string;

  constructor(
    public _usuarioServicio: UsuarioService,
    public router: Router
  ){ }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '' ;

    if(this.email.length > 0){
      this.recuerdame = true;
    }
  }

  public login(forma: NgForm){

    if(forma.invalid){
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioServicio.loginUsuario(usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/home']));
  }
}