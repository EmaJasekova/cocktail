import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommunicationService } from '../communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producer-component',
  imports: [ReactiveFormsModule],
  templateUrl: './producer-component.html',
  styleUrl: './producer-component.css',
})
export class ProducerComponent {
  communicationService = inject(CommunicationService);
  formGroup: FormGroup;
  formControl = new FormControl<string>("", { nonNullable: true });

  constructor() {
    this.formGroup = new FormGroup({
      search: this.formControl
    });
  }

  sendData(data: string) {
    this.communicationService.sendData(data);
  }

  getStream(): Observable<string> {
    return this.communicationService.getStream();
  }
}
