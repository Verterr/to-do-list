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

  byDateSort() {
    this.todos.sort(function(a, b){
      if(a.date === null || b.date === null){
        return new Date(b.date) as any - (new Date(a.date) as any);
      }
      return new Date(a.date) as any - (new Date(b.date) as any);
    });
    this.inProgress.sort(function(a, b){
      if(a.date === null || b.date === null){
        return new Date(b.date) as any - (new Date(a.date) as any);
      }
      return new Date(a.date) as any - (new Date(b.date) as any);
    });
  }

  byPrioritySort() {
    const priorities = {
      'high' : 0,
      'medium' : 1,
      'low' : 2
    };
    this.todos.sort(function(a, b) {
      return priorities[a.priority] - priorities[b.priority];
    });
    this.inProgress.sort(function(a, b) {
      return priorities[a.priority] - priorities[b.priority];
    });
  }
}
