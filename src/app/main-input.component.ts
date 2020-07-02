import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main-input',
  template: `
  <mat-card class="Main-input">
    <mat-form-field appearance="fill" style="width: 68%">
      <mat-label>Task name</mat-label>
      <input matInput>
    </mat-form-field>
    <mat-form-field appearance="fill" style="width: 30%; margin-left: 2%">
      <mat-label>Choose a deadline date</mat-label>
      <input matInput [matDatepicker]="picker">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <br/>
    <mat-form-field appearance="fill" style="width: 100%">
      <mat-label>Task description</mat-label>
      <textarea matInput></textarea>
    </mat-form-field>
    <button mat-flat-button style="width: 100%; border: 1px solid rgb(142,142,142)">Create task</button>
  </mat-card>
  `,
  styles: []
})

export class MainInputComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
}
