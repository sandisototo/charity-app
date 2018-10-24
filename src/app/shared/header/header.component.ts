import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { TabsService } from '@app/services/tabs/tabs-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() header: string;
  @Input() charity: any;
  donation: number;

  totalDonations: number;
  percentage: any;
  percentageStyle: string;

  
  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    if (this.charity) {
      this.totalDonations = this.charity.amountRaised;
      this.tabsService.currentDonationAmount.subscribe(newAmount => this.initPercentage(newAmount))
      this.initPercentage();
    }
  }

  daysToGo(dueDate: string) {
    const to = moment(dueDate, 'DD-MM-YYYY');
    const now = moment();
    return to.diff(now, 'days'); 
  }

  calcPercentage(amount: number = 0) {
    this.totalDonations += amount;
    return (100 * this.totalDonations) / this.charity.amountRequired;
  }
  
  initPercentage(amount: number = 0) {
    this.percentage = this.calcPercentage(amount).toFixed(0);
    this.percentageStyle = `${this.percentage}%`;
  }

}
