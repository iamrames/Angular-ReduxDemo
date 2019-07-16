import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  declarations: [
    TodoDashboardComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoDashboardComponent,
    TodoListComponent
  ],
  providers: []
})
export class TodosModule { }
