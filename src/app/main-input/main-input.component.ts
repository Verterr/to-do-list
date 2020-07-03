import {Component} from '@angular/core';
import {Todo} from '../todo';
import {todoList} from '../todoList';

@Component({
  selector: 'main-input',
  templateUrl: './main-input.component.html',
  styleUrls: []
})

export class MainInputComponent {

  model = new Todo('todo','low', '', '', '');

  onSubmit(title, priority, date, description) {
    todoList.push({
      status: 'todo',
      priority: priority.model ,
      title: title.model,
      date: date.model,
      description: description.model
    });

    console.log(todoList);
  }

}
