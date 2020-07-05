import {Component, Input} from '@angular/core';
import {Todo} from '../Todo/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent {
  @Input() todo: Todo;
  @Input() status: Todo['status'];
}
