import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(
    private users: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.users.getUsers().subscribe(response => {
      response.map(i => {
        if (i.id === +id) { this.user = i; }
      });
    });
  }
}
