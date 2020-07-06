import {Component} from '@angular/core';
import {doneList, inProgressList, todoList} from '../todoList';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Todo} from '../Todo/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../app.component.scss']
})
export class TodoListComponent {
  todos = todoList;
  inProgress = inProgressList;
  done = doneList;

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      todoList.forEach((todo) => todo.status = 'todo');
      inProgressList.forEach((todo) => todo.status = 'inProgress');
      doneList.forEach((todo) => todo.status = 'done');
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(todoList);
      console.log(inProgressList);
      console.log(doneList);
    }
  }
}
