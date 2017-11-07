import { Component, OnInit } from '@angular/core';
import { LogsService } from '../logs.service';
import { LogEntry } from '../logs.model';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {
  logs: LogEntry[] = [];

  constructor(
    private logsService: LogsService
  ) { }

  ngOnInit() {
    this.logs = this.logsService.getLogs();
  }

}
