import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {signal} from '@angular/core';

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
  name=signal('Giselle');
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
    const input = event.target as HTMLInputElement;
    const newValue=input.value
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

}
