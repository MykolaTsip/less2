import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  post: Post[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  showUser(user: User): void {
    console.log(user);
  }

  showPostsOfUser(id: number): void {
    this.userService.postOfUsers(id)
      .subscribe(data => this.post = data);
  }
}
