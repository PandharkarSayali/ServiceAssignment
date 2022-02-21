import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  ActiveToInactive=0;
  InactiveToActive=0;

  onSetActiveCounterIncrement()
  {
    this.ActiveToInactive++;
    console.log("Inactive:"+this.ActiveToInactive);
  }

  onSetInactiveCounterIncrement()
  {
    this.InactiveToActive++;
    console.log("Active:"+this.InactiveToActive);
  }

}
