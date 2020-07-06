import {Component} from '@angular/core';
import {doneList, inProgressList, todoList} from '../todoList';


@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: []
})
export class FiltersComponent {
  todos = todoList;
  inProgress = inProgressList;
  done = doneList;

  byDateSort() {
    this.todos.sort(function(a, b){
      return new Date(a.date) as any - (new Date(b.date) as any);
    });
  }
}
