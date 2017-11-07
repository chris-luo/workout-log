import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { LogItemComponent } from './log-item/log-item.component';
import { LogsListComponent } from './logs-list/logs-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LogsRoutingModule,
    SharedModule
  ],
  declarations: [LogsComponent, LogItemComponent, LogsListComponent]
})
export class LogsModule { }
