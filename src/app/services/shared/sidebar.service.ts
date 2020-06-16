import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Asociados',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Delivery', url: '/delivery' },
        { titulo: 'Taxis', url: '/taxis' },
        { titulo: 'Eventos', url: '/eventos'}
      ]
    }
  ];

  constructor() { }
}
