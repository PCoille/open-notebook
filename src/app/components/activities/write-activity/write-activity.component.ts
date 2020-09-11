import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FreeWriteService } from 'src/app/services/free-write.service';
import { FreeWrite } from 'src/model/free-write.model';

@Component({
  selector: 'app-write-activity',
  templateUrl: './write-activity.component.html',
  styleUrls: ['./write-activity.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WriteActivityComponent implements OnInit {
  freeWrite = new FreeWrite('',  new Date());

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
    const freeWriteFromStorage = this.freeWriteService.getFreeWrites();
    if (freeWriteFromStorage){
      this.freeWrite = this.freeWriteService.getFreeWrites();
    }
  }

  /**
   * Returns date to the format YYYY-MM-DD
   */
  private getISODatetime() {
    return this.freeWrite.date.toISOString().match('^(.*)T')[1];
  }



  public saveInput() {
    this.freeWriteService.setFreeWrites(this.freeWrite);
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }

}
