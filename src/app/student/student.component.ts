import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class studentComponent implements OnInit {
  form: FormGroup;
  public studentData;
  public name = '';
  public lastname = '';
  public email = '';
  public age = 0;
  public dataSource; subscribe;
  public gender: '';
  public studentId;
  public genderData = [
    {
      Id: 1,
      Value: "Male"
    },
    {
      Id: 2,
      Value: "Female"
    },
    {
      Id: 3,
      Value: "Other"
    }
  ]

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<studentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.studentData = Object.assign({}, this.data);

    this.form = this.formBuilder.group({
      id: new FormControl(this.studentId),
      name: new FormControl(this.name, Validators.required),
      lastname: new FormControl(this.lastname, Validators.required),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      age: new FormControl(this.age),
      gender: new FormControl(this.gender)
    });

    if (this.studentData.value == "edit") {
      this.studentId = this.studentData.data.id;
      this.form.patchValue(this.studentData.data);
    }

    this.subscribe = this.appService.allstudentData.subscribe(data => {
      this.dataSource = data;
    });
  }

  onSubmit(formType) {
    if (this.studentData.value === 'new') {
      formType.id = this.dataSource.tableData[this.dataSource.tableData.length - 1].id + 1;
      this.dataSource.tableData.push(formType);
      this.appService.data(this.dataSource);
      this.dialogRef.close();
    }
    if (this.studentData.value === 'edit') {
      for (let i = 0; i < this.dataSource.tableData.length; i++) {
        if (this.dataSource.tableData[i].id == this.studentId) {
          this.dataSource.tableData[i] = formType;
        }
      }
      this.appService.data(this.dataSource);
      this.dialogRef.close();
    }
  }

  ngOnDestory() {
    this.subscribe.unsubscribe();
  }
}
