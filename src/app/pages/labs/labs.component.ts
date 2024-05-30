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
  disabled=true;
  img='https://w3schools.com/howto/img_avatar.png';

  person={
    name:'Giselle',
    age:32,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Helloooo');
  }

  changeHandler(event : Event){
  console.log(event)
  }

}
