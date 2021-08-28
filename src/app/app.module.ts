import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { studentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule ,MatCardModule, MatFormFieldModule, MatTableModule, MatDialogRef, MAT_DIALOG_DATA, 
  MatDialogModule, MatTooltipModule, MatIconModule, MatInputModule, MatRadioModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    studentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule,
    NgxSpinnerModule,
    OrderModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [ {
    provide: MatDialogRef,
    useValue: {}
  },
  { provide: MAT_DIALOG_DATA, useValue: [] },
  NgxSpinnerService],
  bootstrap: [AppComponent],
  entryComponents: [
    studentComponent
  ]
})      
export class AppModule { }
