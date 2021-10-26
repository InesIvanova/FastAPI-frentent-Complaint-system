import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateApproverComponent } from './create-approver/create-approver.component';


const routes: Routes = [
  { path: 'create/approver', component: CreateApproverComponent },
  { path: 'create/admin', component: CreateAdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
