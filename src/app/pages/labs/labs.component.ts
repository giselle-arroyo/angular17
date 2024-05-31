import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {signal} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})

export class LabsComponent {
  welcome = 'Hello';
  tasks = signal([
    'Install angular',
    'Create project',
    'Create components'
  ]);
  name=signal('Giselle');
  age=32;
  disabled=true;
  img='https://w3schools.com/howto/img_avatar.png';

  person=signal({
    name:'Giselle',
    age:32,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  })

  colorControl = new FormControl();
  widthControl = new FormControl(50,{
    nonNullable : true,
  });

  constructor(){
    //Reading the value using logic
    this.colorControl.valueChanges.subscribe(value => {
      console.log(value);
    })
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

  changeAge(event : Event){
    const input = event.target as HTMLInputElement;
    const newValue=input.value
    this.person.update(prevState => {
      return{
      ...prevState,
      age:parseInt(newValue,10)
    }
    })
  }

  changeName(event : Event){
    const input = event.target as HTMLInputElement;
    const newValue=input.value
    this.person.update(prevState => {
      return{
      ...prevState,
      name:newValue
    }
    })
  }

}
