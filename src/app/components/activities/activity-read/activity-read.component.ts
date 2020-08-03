import { Component, OnInit } from '@angular/core';
import { FreeWriteService } from 'src/app/services/free-write.service';

@Component({
  selector: 'app-activity-read',
  templateUrl: './activity-read.component.html',
  styleUrls: ['./activity-read.component.scss']
})
export class ActivityReadComponent implements OnInit {

  input = '';

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
    this.input = this.freeWriteService.getFreeWrites();
  }

}
