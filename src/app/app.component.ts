import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public todoList: any[];

  constructor() {
      this.todoList = [];
  }

}
