import { Component, OnInit } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  searchText;
  users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
