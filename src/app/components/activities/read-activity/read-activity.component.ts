import { Component, OnInit } from '@angular/core';
import { FreeWriteService } from 'src/app/services/free-write.service';

@Component({
  selector: 'app-read-activity',
  templateUrl: './read-activity.component.html',
  styleUrls: ['./read-activity.component.scss']
})
export class ReadActivityComponent implements OnInit {

  input = '';

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
    this.input = this.freeWriteService.getFreeWrites();
  }

}
