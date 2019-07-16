import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { DELETEALL_TODO } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

  @select(s => s.tasking.todoList) todos;
  @select(s => s.tasking.lastUpdate) lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  clearTodos() {
    this.ngRedux.dispatch({ type: DELETEALL_TODO });
  }

}
