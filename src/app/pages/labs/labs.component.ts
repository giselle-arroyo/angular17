import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})

export class LabsComponent {
  welcome = 'Hello';
  tasks = [
    'Install angular',
    'Create project',
    'Create components'
  ];
  name='Giselle';
  age=32;

}
