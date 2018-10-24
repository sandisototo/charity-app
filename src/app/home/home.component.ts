import { Component, OnInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { CharityService } from '../services/charity/charity.service';
import { Router } from '@angular/router';
import { EncryptionService } from '@app/services/helper-services/encryption-service';

const TABS = [
  'Newest',
  'Popular',
  'End date'
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: any;
  charities: any[];
  isLoading: boolean;

  constructor(
    private charityService: CharityService,
    private encryption: EncryptionService,
    private router: Router) { }

  ngOnInit() {
    this.tabs = TABS;
    this.isLoading = true;
    this.charityService
      .getAll()
      .pipe(
      finalize(() => {
        setTimeout(() => this.isLoading = false, 1000);
        // this.isLoading = false
        })
      )
      .subscribe((charities: any) =>  {
        this.charities = charities;
      }, 
      err => {
          console.log(err);
      });
  }

  viewDetails(charityId: number) {
    let encrypted = this.encryption.encrypted(charityId);
    this.router.navigate(['/charity', encrypted]);
  }
}
