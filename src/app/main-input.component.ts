import {Component} from '@angular/core';
import {Todo} from './todo';
import {todoList} from './todoList';

@Component({
  selector: 'main-input',
  templateUrl: './main-input.component.html',
  styleUrls: []
})

export class MainInputComponent {

  model = new Todo('', '', '');

  onSubmit(title, date, description) {
    todoList.push({
      title: title.model,
      date: date.model,
      description: description.model
    });

    console.log(todoList);
  }

}
