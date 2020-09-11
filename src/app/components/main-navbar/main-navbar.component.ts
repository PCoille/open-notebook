import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClearDialogComponent } from '../dialogs/clear-dialog/clear-dialog.component';
import { FreeWriteService } from 'src/app/services/free-write.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private freeWriteService: FreeWriteService
    ) { }

  ngOnInit(): void {
  }

  private download(filename: string, text: string) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  public saveFile(){
    const freeWriteFromStorage = this.freeWriteService.getFreeWrites();
    if (freeWriteFromStorage){
      if (freeWriteFromStorage){
        this.download('open-notebook.json', JSON.stringify(freeWriteFromStorage));
      }
      else {
        console.log('Empty input: didn\'t save');
      }
    }
  }

  public openClearDialog() {
    const dialogRef = this.dialog.open(ClearDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
