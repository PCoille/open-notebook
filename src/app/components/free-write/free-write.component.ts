import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-write',
  templateUrl: './free-write.component.html',
  styleUrls: ['./free-write.component.scss']
})
export class FreeWriteComponent implements OnInit {

  input = '';

  constructor() { }

  ngOnInit(): void {
    this.input = localStorage.getItem('input');
  }

  public saveInput() {
    localStorage.setItem('input', this.input);
  }
}
