import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User = {
    id: 1,
    username: 'Med'
  };
  constructor() { }

  ngOnInit() {
  }

}
