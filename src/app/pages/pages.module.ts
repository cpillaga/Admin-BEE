import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent
    ],
    exports: [
        PagesComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class PagesModule { }
