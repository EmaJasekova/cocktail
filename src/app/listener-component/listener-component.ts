import { Component, inject, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-listener-component',
  imports: [],
  templateUrl: './listener-component.html',
  styleUrl: './listener-component.css',
})
export class ListenerComponent implements OnInit {
  communicationService = inject(CommunicationService);

  ngOnInit() {
    this.communicationService.getStream().subscribe((data) => {
      console.log("Data received: " + data);
    });
  }
}
