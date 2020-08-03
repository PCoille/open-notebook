import { Component, OnInit } from '@angular/core';
import { FreeWriteService } from 'src/app/services/free-write.service';

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.scss']
})
export class ClearDialogComponent implements OnInit {

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
  }

  public clearInput(){
    this.freeWriteService.clearFreeWrites();
    location.reload();
  }
}
