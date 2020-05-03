import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { users } from '../users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user;
  public log:boolean = false;
  public resume:boolean = false;
  public project:boolean = false;
  public personal_file:boolean = false;
  public highlights:boolean = false;
  public community:boolean = false;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = users[+params.get('userId')];
    });
  }

  getLog() {
    this.log = !this.log;
    // if (this.log === true) { this.log = !this.log }
    if (this.resume === true) { this.resume = !this.resume }
    if (this.project === true) { this.project = !this.project }
    if (this.personal_file === true) { this.personal_file = !this.personal_file }
    if (this.highlights === true) { this.highlights = !this.highlights }
    if (this.community === true) { this.community = !this.community }
  }
  getResume() {
    this.resume = !this.resume;
    if (this.log === true) { this.log = !this.log }
    // if (this.resume === true) { this.resume = !this.resume }
    if (this.project === true) { this.project = !this.project }
    if (this.personal_file === true) { this.personal_file = !this.personal_file }
    if (this.highlights === true) { this.highlights = !this.highlights }
    if (this.community === true) { this.community = !this.community }
  }
  getProject() {
    this.project = !this.project;
    if (this.log === true) { this.log = !this.log }
    if (this.resume === true) { this.resume = !this.resume }
    // if (this.project === true) { this.project = !this.project }
    if (this.personal_file === true) { this.personal_file = !this.personal_file }
    if (this.highlights === true) { this.highlights = !this.highlights }
    if (this.community === true) { this.community = !this.community }
  }
  getPersonalFile() {
    this.personal_file = !this.personal_file;
    if (this.log === true) { this.log = !this.log }
    if (this.resume === true) { this.resume = !this.resume }
    if (this.project === true) { this.project = !this.project }
    // if (this.personal_file === true) { this.personal_file = !this.personal_file }
    if (this.highlights === true) { this.highlights = !this.highlights }
    if (this.community === true) { this.community = !this.community }
  }
  getHighlights() {
    this.highlights = !this.highlights;
    if (this.log === true) { this.log = !this.log }
    if (this.resume === true) { this.resume = !this.resume }
    if (this.project === true) { this.project = !this.project }
    if (this.personal_file === true) { this.personal_file = !this.personal_file }
    // if (this.highlights === true) { this.highlights = !this.highlights }
    if (this.community === true) { this.community = !this.community }
  }
  getCommunity() {
    this.community = !this.community;
    if (this.log === true) { this.log = !this.log }
    if (this.resume === true) { this.resume = !this.resume }
    if (this.project === true) { this.project = !this.project }
    if (this.personal_file === true) { this.personal_file = !this.personal_file }
    if (this.highlights === true) { this.highlights = !this.highlights }
    // if (this.community === true) { this.community = !this.community }
  }
}
