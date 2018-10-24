import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { TabsService } from '@app/services/tabs/tabs-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnChanges {
  @Input() tabs: string[];
  tab: number;
  @Input() charities: any[];
  @Input() charity: any;
  @Output() onSelectCharity = new EventEmitter;
  donate$ = Observable;

  currentPage: string = 'home';
  donationFormActive: boolean;

  amount: number;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tab = 1;
    this.amount = null;
  }

  ngOnChanges(changes: any) {
    // only run when property "charity" changed
    if (changes['charity']) {
      this. currentPage = 'details';
    }
  }

  selectTab(id: number){
    this.tab = id;
  }

  activeTab(num: number){
    return this.tab === num;
  }

  viewDetails(charityId: number) {
    this.onSelectCharity.emit(charityId);
  }

  donateForm() {
    this.donationFormActive = !this.donationFormActive; 
  }

  donate() {
    console.log('this.amount--->', this.amount);
    this.tabsService.updateDonation(this.amount);
  }

  readableDate(dueDate: string) {
    const momentDate = moment(dueDate, 'DD-MM-YYYY');
    const day = momentDate.date();
    const month = moment(momentDate, 'MM').format('MMM');
  
    return `${day} ${month}`;
  }
}
