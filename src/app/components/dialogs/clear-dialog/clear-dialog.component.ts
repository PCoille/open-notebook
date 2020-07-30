import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.scss']
})
export class ClearDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public clearInput(){
    localStorage.removeItem('input');
    location.reload();
  }
}
