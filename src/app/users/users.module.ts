import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    NgxSpinnerModule
  ]
})
export class UsersModule { }
