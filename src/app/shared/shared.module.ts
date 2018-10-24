import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    LoaderComponent,
    TabsComponent
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    TabsComponent
  ]
})
export class SharedModule {}
