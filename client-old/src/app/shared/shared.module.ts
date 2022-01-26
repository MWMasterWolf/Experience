import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './template/header/header.component';

// Pipes
import { TimeFromNowPipe } from './pipes/time-from-now.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    TimeFromNowPipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    TimeFromNowPipe,
    SafeUrlPipe
  ]
})
export class SharedModule { }
