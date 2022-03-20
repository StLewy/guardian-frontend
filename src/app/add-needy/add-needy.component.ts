import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GuardianService} from "../guardian.service";
import {Needy} from "../models/needy";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-add-needy',
  templateUrl: './add-needy.component.html',
  styleUrls: ['./add-needy.component.css']
})
export class AddNeedyComponent {
  public needy: any;
  public resultString: any;

  constructor(private guardianService: GuardianService) {
  }

  addNeedy(addFrom: NgForm): void {
    this.guardianService.addNeedy(addFrom.value).subscribe(
      (response: Needy) => {
        this.resultString = response.statusResponese;
      },
      (error: HttpErrorResponse) =>{
        this.resultString = "B";
      }
    );
  }
}
