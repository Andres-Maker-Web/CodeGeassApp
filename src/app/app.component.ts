import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/folder/inbox', icon: 'home-sharp'},
    { title: 'Personajes', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Momentos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Acerca de', url: '/folder/archived', icon: 'archive' },
    { title: 'En mi vida', url: '/folder/trash', icon: 'trash' },
    { title: 'Contratame', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
