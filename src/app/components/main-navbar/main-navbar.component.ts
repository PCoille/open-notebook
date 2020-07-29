import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
    const input = localStorage.getItem('input');
    if (input){
      this.download('open-notebook', input);
    }
    else {
      console.log('Empty input: didn\'t save');
    }
  }

  public openDialog() {
    const dialogRef = this.dialog.open(ClearDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.html',
})
export class ClearDialogComponent {
  public clearInput(){
    localStorage.removeItem('input');
    location.reload();
  }
}
