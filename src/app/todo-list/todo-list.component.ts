import {Component} from '@angular/core';
import {todoList} from '../todoList';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})
export class TodoListComponent {
  todos = todoList;
}
