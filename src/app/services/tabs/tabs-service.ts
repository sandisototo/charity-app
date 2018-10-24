import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TabsService {

  private donation$ = new BehaviorSubject(0);
  currentDonationAmount = this.donation$.asObservable();

  constructor() { }

  updateDonation(amount: number) {
      this.donation$.next(amount);
  }
}