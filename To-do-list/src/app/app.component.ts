import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public form: FormGroup;
  public todos: Todo[] = [];

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        title: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required
        ])]
      })
      this.load()
    }

  load() {
    this.todos.push()
  }
  addTodo() {
    const title = this.form.controls['title'].value;
    this.todos.push(new Todo( title, null));
    this.form.reset()
  }
  rmTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }
  markAsDone(todo: Todo) {
    todo.done = true;
  }
  markAsNotDone(todo: Todo) {
    todo.done = false;
  }
}
