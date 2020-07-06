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

  currentDate = new FormControl(new Date());
  model = new Todo( 'medium', '', null, '');
  selected = new FormControl('medium');
  onSubmit(title, priority, date, description) {
    if(date.model !== null){
      console.log(date.model);
      date.model = date.model.toLocaleDateString();
    }
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

  dateFilter(day) {
    const today = new Date();
    today.setDate(today.getDate()-1);
    return day > today;
  }

}
