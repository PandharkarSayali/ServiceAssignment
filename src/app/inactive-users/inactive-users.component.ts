import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../UserService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    users:string[];

  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.users=this.userservice.InactiveUsers;
  }

  onSetActive(id:number){
    this.userservice.onSetActive(id);
  
    console.log("abc");  
      console.log("abc");  
   
  }

}
