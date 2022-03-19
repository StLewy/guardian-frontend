import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {GuardianService} from "../guardian.service";
import {Code} from "../models/code";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {



  public code: Code = {
    generateCode: ''
  }
  errorMessage: any;
  constructor(private guardianService:GuardianService) {}

  public qenerateCode():void{
    this.guardianService.getCode()
      .subscribe(
        (response:Code) => {
          this.code =  response;
        },
        (error) => {
          console.error(error)
        }
      )
  }

}
