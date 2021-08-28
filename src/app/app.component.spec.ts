import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { studentComponent } from './student/student.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, NgxSpinnerModule,MatFormFieldModule,FormsModule,MatCardModule
      ],
      declarations: [
        AppComponent, studentComponent
      ],
      providers: [ NgxSpinnerService ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
