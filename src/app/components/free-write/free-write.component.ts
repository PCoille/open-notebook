import { Component, OnInit } from '@angular/core';
import { FreeWriteService } from 'src/app/services/free-write.service';

@Component({
  selector: 'app-free-write',
  templateUrl: './free-write.component.html',
  styleUrls: ['./free-write.component.scss']
})
export class FreeWriteComponent implements OnInit {

  input = '';

  constructor(private freeWriteService: FreeWriteService) { }

  ngOnInit(): void {
    this.input = this.freeWriteService.getFreeWrites();
  }

  public saveInput() {
    this.freeWriteService.setFreeWrites(this.input);
  }
}
