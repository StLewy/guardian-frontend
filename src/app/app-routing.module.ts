import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CodeComponent} from "./code/code.component";
import {NeedyComponent} from "./needy/needy.component";
import {AddNeedyComponent} from "./add-needy/add-needy.component";
import {InviteSponsorComponent} from "./invite-sponsor/invite-sponsor.component";
import {AddGuardianComponent} from "./add-guardian/add-guardian.component";


const routes: Routes = [
  {path: 'code', component: CodeComponent},
  {path:'needy', component:NeedyComponent},
  {path:'add-needy', component:AddNeedyComponent},
  {path:'invite-sponsor', component:InviteSponsorComponent},
  {path:'add-guardian',component:AddGuardianComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
