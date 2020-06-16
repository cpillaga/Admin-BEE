import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        DeliveryComponent
    ],
    exports: [
        PagesComponent,
        HomeComponent,
        DeliveryComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})

export class PagesModule { }
