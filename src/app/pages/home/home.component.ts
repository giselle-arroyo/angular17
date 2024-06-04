import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id:Date.now(),
      title:'Create project',
      completed:true
    },
    {
      id:Date.now(),
      title:'Create component',
      completed:false
    },
  ]);

  newTaskControl = new FormControl('',{
    nonNullable:true,
    validators:[
      Validators.required,
    ]
  });
//Set default states to manage
  filter = signal <'all' | 'pending' | 'completed' > ('all');

  //every time change something,this funtion is going to be execute it
  tasksByFilter = computed(() => {
    const filter = this.filter();
    const tasks=this.tasks();

    if(filter === 'pending'){
      return tasks.filter(task => !task.completed)
    }
    else if(filter === 'completed'){
      return tasks.filter(task => task.completed)
    }
    return tasks;

  })

  changeHandler(){
    if(this.newTaskControl.valid){
      const value=this.newTaskControl.value.trim();
      if(value !== ''){
        this.addTask(value);
        this.newTaskControl.setValue('');
      }
      
    }
    
  }

  addTask(title:string){
    const newTask={
      id:Date.now(),
      title,
      completed:false,
    };
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((tasks,position) => position != index));
  }

  updateTask(index : number){
   this.tasks.update((tasks) => {
    return tasks.map((task, position) =>{
      if(position === index){
        return{
          ...task,
          completed:!task.completed
        }
      }else{
        return task;
      }
    })
   })
  }
  editingMode(index: number){
    this.tasks.update((state) => {
      return state.map((state, position) =>{
        if(position === index){
          return{
            ...state,
            editing:true
          }
        }else{
          return {
            ...state,
            editing:false
          };
        }
      })
     })
  }

  updateTaskText(index: number, event: Event){
    const input=event.target as HTMLInputElement;
    this.tasks.update((state) => {
      return state.map((state, position) =>{
        if(position === index){
          return{
            ...state,
            title: input.value,
            editing: false
          }
        }else{
          return state;
        }
      })
     })
  }

  changeFilter(filter: 'all' | 'pending' | 'completed'){
    this.filter.set(filter);

  }

}
