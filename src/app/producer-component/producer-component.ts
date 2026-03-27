import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-producer-component',
  imports: [ReactiveFormsModule],
  templateUrl: './producer-component.html',
  styleUrl: './producer-component.css',
})
export class ProducerComponent {
  formGroup: FormGroup;
  formControl = new FormControl<string>("", { nonNullable: true });

  constructor() {
    this.formGroup = new FormGroup({
      search: this.formControl
    });
  }

  sendData(data: string) {
    console.log("Data sent: " + data);
  }
}
