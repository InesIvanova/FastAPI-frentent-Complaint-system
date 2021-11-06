import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateApproverComponent } from './create-approver/create-approver.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [ CreateApproverComponent, CreateAdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    NgxSpinnerModule,
  ],
  exports: [
    CreateApproverComponent,
    CreateAdminComponent
  ]
})
export class AdminModule { }
