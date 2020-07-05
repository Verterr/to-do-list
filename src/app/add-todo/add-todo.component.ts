import {Component} from '@angular/core';
import {Todo} from '../Todo/todo';
import {todoList} from '../todoList';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'main-input',
  templateUrl: './add-todo.component.html',
  styleUrls: []
})
export class AddTodoComponent {

  model = new Todo( 'medium', '', '', '');
  selected = new FormControl('medium');
  onSubmit(title, priority, date, description) {
    if(title.model.length !== 0){
      todoList.push({
        priority: priority.value,
        title: title.model,
        date: date.model,
        description: description.model
      });
    }
    console.log(todoList);
  }

}
