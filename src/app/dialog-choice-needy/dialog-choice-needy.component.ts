import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Pairing} from "../models/pairing";
import {NgForm} from "@angular/forms";
import {GuardianService} from "../guardian.service";
import {response} from "express";
import {HttpErrorResponse} from "@angular/common/http";
import {NeedyComponent} from "../needy/needy.component";

@Component({
  selector: 'app-dialog-choice-needy',
  templateUrl: './dialog-choice-needy.component.html',
  styleUrls: ['./dialog-choice-needy.component.css']
})
export class DialogChoiceNeedyComponent implements OnInit {

  public isSave: any = "";
  constructor(
    public dialogRef: MatDialogRef<DialogChoiceNeedyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private guardianService: GuardianService,
  ) {}
  ngOnInit(): void {
  }

  addPairing(addForm: NgForm) {
    console.log(addForm.value)
    if (addForm.value['period'] != "" && addForm.value['amount'] != "") {
      this.guardianService.addPairing(addForm.value).subscribe(
        (response: Pairing) => {
      this.isSave = response.statusResponse;
      },
        (error: HttpErrorResponse) => {
          this.isSave = "B";
        }
      );
    }
  }
}
