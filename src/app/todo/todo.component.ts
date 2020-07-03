import {Component} from '@angular/core';
import {todoList} from '../todoList';

@Component({
  selector: 'task-list',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent {
  todos = todoList;

}
