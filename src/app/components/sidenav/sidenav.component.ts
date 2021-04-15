import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { LogInService } from 'src/app/services/log-in.service';
import { ToggleService } from 'src/app/services/toggle.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewChecked {
  @ViewChild('drawer')
  public drawer!:MatDrawer

  constructor(public dialog:MatDialog, public toggle:ToggleService,public logInService:LogInService) { }



  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngAfterViewChecked(): void {
    this.toggle.drawer=this.drawer
  }


}
