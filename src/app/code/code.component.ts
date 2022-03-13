import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {GuardianService} from "../guardian.service";
import {code} from "../models/code";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  code: string | undefined;
  errorMessage: any;
  constructor(private breakpointObserver: BreakpointObserver, private guardianService:GuardianService) {}

  public qenerateCode(){
    this.guardianService.getCode()
      .subscribe(
        (response) => {
          this.code =  response;
        },
        (error) => {
          console.error(error)

        }
      )
  }

}
