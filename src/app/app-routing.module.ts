import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CodeComponent} from "./code/code.component";
import {NeedyComponent} from "./needy/needy.component";
import {AddNeedyComponent} from "./add-needy/add-needy.component";


const routes: Routes = [
  {path: 'code', component: CodeComponent},
  {path:'needy', component:NeedyComponent},
  {path:'add-needy', component:AddNeedyComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
