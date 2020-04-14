import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    // esto en realidad es un observable 
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
        // ,() => {} cuando el observable tiene error
        // ,() => {} cuando el observable se ha completado
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }
}
