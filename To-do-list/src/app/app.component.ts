import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  public todos: Todo[] = [];

    constructor(){

      this.todos.push({ 
      title: 'Study angular',
      done: 'false'
    })

    this.todos.push({
      title: 'Study git',
      done: 'false'
    })
  }

  addTodo(){

  }

  rmTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    

  }
}
