import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../UserService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:string[];
 
  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.users=this.userservice.activeUsers;
    this.users=this.userservice.activeUsers;
  }
  onSetInactive(id:number){
    this.userservice.onSetInactive(id);
  }

}
