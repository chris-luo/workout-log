import { Component, OnInit, Input } from '@angular/core';
import { LogEntry } from '../logs.model';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.css']
})
export class LogItemComponent implements OnInit {
  @Input() log: LogEntry;

  constructor() { }

  ngOnInit() {
  }

}
