import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tasks = signal([
    'Install angular',
    'Create project',
    'Create components'
  ]);

  changeHandler(event : Event){
    const input=event.target as HTMLInputElement;
    const newTask=input.value
    this.tasks.update((tasks) => [... tasks, newTask])
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((tasks,position) => position != index));
  }

}
