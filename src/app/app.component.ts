import { Component } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Worldwide American';
  searchText;
  users = users;
}
