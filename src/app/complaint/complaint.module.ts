import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';
import { ComplaintRoutingModule } from './complaint-routing.module';
import { ListComponent } from './list/list.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComplaintRoutingModule,
    NgxSpinnerModule
  ],
  exports: [
    CreateComponent, ListComponent
  ]
})
export class ComplaintModule { }
