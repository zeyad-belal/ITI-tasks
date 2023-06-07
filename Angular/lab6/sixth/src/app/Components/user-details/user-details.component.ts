import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService} from 'src/app/services/users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{
  ID:any;
  user:any;

  constructor(myRoute:ActivatedRoute , myService:UsersService){
    this.ID = myRoute.snapshot.params["id"];
    console.log(myRoute)
    myService.getUserById(this.ID).subscribe(
      (data)=>this.user = data,
      (err)=>console.log(err)
    )
  }


}
