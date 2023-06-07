import { Component, OnInit } from '@angular/core';
import { UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  users:any;

  constructor(public myService:UsersService){}

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (data)=>this.users = data,
      (err)=>console.log(err)
    )
  }

}
