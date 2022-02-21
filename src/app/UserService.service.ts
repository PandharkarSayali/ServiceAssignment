import { Injectable,OnInit } from '@angular/core';
import { CounterServiceService } from './CounterService.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService  {
  activeUsers=['Jiya','Riya'];
  InactiveUsers=['Miya','Kiya'];

  constructor(private counterservice:CounterServiceService) {}

  onSetInactive(id:number){
    this.InactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterservice.  onSetActiveCounterIncrement();
  }

  onSetActive(id:number){
    this.activeUsers.push(this.InactiveUsers[id]);
    this.InactiveUsers.splice(id,1);
    this.counterservice.onSetInactiveCounterIncrement();
  }


}
