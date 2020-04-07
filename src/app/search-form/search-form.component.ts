import { Component, OnInit } from '@angular/core';
import { users } from '../user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchText;
  users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
