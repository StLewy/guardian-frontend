import {Component} from '@angular/core';
import {GuardianService} from "../guardian.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Guardian} from "../models/guardian";

@Component({
  selector: 'app-add-guardian',
  templateUrl: './add-guardian.component.html',
  styleUrls: ['./add-guardian.component.css']
})
export class AddGuardianComponent {

  public resultGuardian: any;

  constructor(private guardianService: GuardianService) {
  }

  addGuardian(addFrom: NgForm): void {
    this.guardianService.addGuardian(addFrom.value).subscribe(
      (response: Guardian) => {
        this.resultGuardian = response.responseStatus;
        if (response.responseStatus == "C") {
          addFrom.reset();
        }
      },
      (error: HttpErrorResponse) => {
        this.resultGuardian = "B";
      }
    );
  }
}
