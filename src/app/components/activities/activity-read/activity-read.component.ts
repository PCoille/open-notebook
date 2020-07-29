import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-read',
  templateUrl: './activity-read.component.html',
  styleUrls: ['./activity-read.component.scss']
})
export class ActivityReadComponent implements OnInit {

  input = '';

  constructor() { }

  ngOnInit(): void {
    this.input = localStorage.getItem('input');
  }

}
