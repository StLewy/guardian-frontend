import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CodeComponent} from "./code/code.component";


const routes: Routes = [
  {path: 'code', component: CodeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
