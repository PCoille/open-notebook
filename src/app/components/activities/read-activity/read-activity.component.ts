import { Component, OnInit } from '@angular/core';
import { FreeWriteService } from 'src/app/services/free-write.service';
import { FreeWrite } from 'src/model/free-write.model';

@Component({
  selector: 'app-read-activity',
  templateUrl: './read-activity.component.html',
  styleUrls: ['./read-activity.component.scss']
})
export class ReadActivityComponent implements OnInit {

  freeWrite = new FreeWrite('',  new Date());

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
    const freeWriteFromStorage = this.freeWriteService.getFreeWrites();
    if (freeWriteFromStorage){
      this.freeWrite = this.freeWriteService.getFreeWrites();
    }
  }

}
