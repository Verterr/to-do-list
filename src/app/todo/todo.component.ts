import {Component, Input} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent {
  @Input() todo: Todo;
}
