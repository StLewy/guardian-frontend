import {Component, OnInit} from '@angular/core';
import {Needy} from "../models/needy";
import {GuardianService} from "../guardian.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {DialogChoiceNeedyComponent} from "../dialog-choice-needy/dialog-choice-needy.component";

@Component({
  selector: 'app-needy',
  templateUrl: './needy.component.html',
  styleUrls: ['./needy.component.css']
})
export class NeedyComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  public needyList: Needy[] = [];

  constructor(private guardianService:GuardianService, public dialog: MatDialog) {}

  ngOnInit(){
this.getNeedy();
  }

  public getNeedy(): void {
    this.guardianService.getAllNeedByStatus().subscribe(
      (response: Needy[]) => {
        this.needyList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  openDialog(source:number): void {
  const dialogRef = this.dialog.open(DialogChoiceNeedyComponent,{
    data: {idNeedy: source},
  });
    dialogRef.afterClosed().subscribe(result => {
      this.getNeedy();
    });
  }

}

