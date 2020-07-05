import {Component} from '@angular/core';
import {todoList} from '../todoList';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Todo} from '../todo/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})
export class TodoListComponent {
  todos = todoList;

  inProgressStatus = 'inProgress';
  todoStatus = 'todo';
  doneStatus = 'done';

  drop(event: CdkDragDrop<Todo[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
