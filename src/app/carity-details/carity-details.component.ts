import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EncryptionService } from '@app/services/helper-services/encryption-service';
import { CharityService } from '@app/services/charity/charity.service';
import { finalize } from 'rxjs/operators';

const TABS = [
  'About',
  'Supporters',
  'Contact'
]

@Component({
  selector: 'app-carity-details',
  templateUrl: './carity-details.component.html',
  styleUrls: ['./carity-details.component.scss']
})
export class CarityDetailsComponent implements OnInit {
  tabs: any;
  isLoading: boolean;
  charity: any;
  private sub: Subscription;
  id: number;
  constructor(
    private charityService: CharityService,
    private route: ActivatedRoute,
    private encryption: EncryptionService
  ) { }

  ngOnInit() {
    this.tabs = TABS;

    this.isLoading = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      const decrypted = parseInt(this.encryption.decrypted(this.id));
      this.getCharity(decrypted);
   });
  }

  getCharity(charityId: number) {
    this.charityService
    .getCharity(charityId)
    .pipe(
      finalize(() => {
        setTimeout(() => this.isLoading = false, 1000);
      // this.isLoading = false
      })
    )
    .subscribe((charity: any) => {
      this.charity = charity;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
