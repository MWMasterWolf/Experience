import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TimeFromNowPipe } from './pipes/time-from-now.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    SafeUrlPipe,
    TimeFromNowPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SafeUrlPipe,
    TimeFromNowPipe
  ]
})
export class SharedModule { }
