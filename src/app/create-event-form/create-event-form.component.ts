// event-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: any[] = [
    {
      title: 'Événement 1',
      description: 'Description de l\'événement 1.',
      date: '2024-03-10',
      location: 'Lieu de l\'événement 1'
    },
    {
      title: 'Événement 2',
      description: 'Description de l\'événement 2.',
      date: '2024-03-15',
      location: 'Lieu de l\'événement 2'
    },
    {
      title: 'Événement 3',
      description: 'Description de l\'événement 3.',
      date: '2024-03-20',
      location: 'Lieu de l\'événement 3'
    }
  ];
}
