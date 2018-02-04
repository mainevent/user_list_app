import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  usersList: User[];
  constructor(
    private users: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users.getUsers().subscribe((response) => {
      this.usersList = response;
    }, error2 => console.log(error2));
  }
}
