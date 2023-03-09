import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [CommonModule],
  exports: [
    StepsModule,
    SidebarModule,
    SelectButtonModule,
    InputSwitchModule,
    ButtonModule,
    InputNumberModule,
    CardModule,
    TabViewModule,
  ],
})
export class CorePrimengModule {}
