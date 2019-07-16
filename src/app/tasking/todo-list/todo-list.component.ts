import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './../actions';
import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select(s => s.tasking.todoList) todos;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addTodo(input: HTMLInputElement) {
    // tslint:disable-next-line: curly
    if (!input.value) return;

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: DELETE_TODO, id: todo.id });
  }

}
