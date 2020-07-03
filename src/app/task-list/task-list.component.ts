import {Component} from '@angular/core';
import {todoList} from '../todoList';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styles: []
})
export class TaskListComponent {
  todos = todoList;
}
