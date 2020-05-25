import {Component, Input, OnInit} from '@angular/core';
import {App} from '../../beans/app';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

  @Input() app: App;

  constructor() { }

  ngOnInit(): void {
  }

}
