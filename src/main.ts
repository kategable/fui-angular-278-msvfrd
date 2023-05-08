import 'zone.js/dist/zone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [`form { display: grid; gap: 20px; }`],
  template: `
  <h1>finra-input-text missing '*' when formControlName is present</h1>

  <form [formGroup]="form">

    <finra-input-text label="I'm required" required="true"></finra-input-text>

    <finra-input-text label="I'm required" required="true" ngDefaultControl></finra-input-text>

    <finra-input-text label="I'm required, but you don't know" required></finra-input-text>

    <finra-input-text label="I'm required, but you don't know" required="true" ngDefaultControl formControlName="requiredInput"></finra-input-text>

  <form>
  `,
})
export class App {
  form: FormGroup = new FormGroup({
    requiredInput: new FormControl(''),
  });

  constructor() {
    this.form.valueChanges.subscribe(console.log);
  }
}

bootstrapApplication(App);
