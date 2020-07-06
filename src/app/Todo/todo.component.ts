import {Component, Input} from '@angular/core';
import {Todo} from '../Todo/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../app.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
}
