import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';

import { studentComponent } from './student.component';

describe('studentComponent', () => {
  let component: studentComponent;
  let fixture: ComponentFixture<studentComponent>;
  const dialogMock = {​​​​
    close: () => {​​​​ }​​​​
   }​​​​;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule, FormsModule, MatCardModule, MatDialogModule, HttpClientModule
      ],
      declarations: [ studentComponent ],
      providers: [ {
        provide: MatDialogRef,
        useValue: dialogMock
      },
      { provide: MAT_DIALOG_DATA, useValue: [] },
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(studentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
