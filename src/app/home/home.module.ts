import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharityService } from '../services/charity/charity.service';
import { EncryptionService } from '@app/services/helper-services/encryption-service';
import { CarityDetailsComponent } from '@app/carity-details/carity-details.component';
import { TabsService } from '@app/services/tabs/tabs-service';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, CarityDetailsComponent],
  providers: [
    CharityService,
    EncryptionService,
    TabsService
  ]
})
export class HomeModule {}
