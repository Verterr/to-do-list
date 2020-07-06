import {Component} from '@angular/core';
import {doneList, inProgressList, todoList} from '../todoList';


@Component({
  selector: 'sorts',
  templateUrl: './sorts.component.html',
  styleUrls: []
})
export class SortsComponent {
  todos = todoList;
  inProgress = inProgressList;

  byDateSort() {
    this.todos.sort(function(a, b){
      if(a.date === null) return 1;
      if(b.date === null) return -1;
      return new Date(a.date) as any - (new Date(b.date) as any);
    });
    this.inProgress.sort(function(a, b){
      if(a.date === null) return 1;
      if(b.date === null) return -1;
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
