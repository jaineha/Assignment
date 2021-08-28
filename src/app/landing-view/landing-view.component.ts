import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { studentComponent } from "../student/student.component"
import { OrderPipe } from 'ngx-order-pipe';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  public id = "ID";
  public name = "Name";
  public email = "Email";
  public age = "Age";
  public gender = "Gender";
  public dataSourceTable = [];
  public subscribe; subscribe2;
  public pageIndex = 0;
  public totalElements: any;
  public Alldata;
  displayedColumns: string[] = [
    'ID',
    'Name',
    'Email',
    "Gender",
    'Age',
    'ACTION'
  ];

  sort = {
    column: 'ID',
    descending: true
  };
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

  constructor(public dialogRef: MatDialogRef<LandingViewComponent>,
    public dialog: MatDialog,
    public appService: AppService,
    public spinner: NgxSpinnerService,
    private orderPipe: OrderPipe
  ) {
    this.dataSourceTable = orderPipe.transform(this.dataSourceTable, 'Id', true);
  }

  ngOnInit() {
    this.subscribe = this.appService.tableData().subscribe(data => {
      this.Alldata = data;
      this.dataSourceTable = data.tableData;
      this.appService.data(data);
    });
    this.selectedCls('Id')
    this.changeSorting('Id');
  }

  selectedCls(column) {
    return column == this.sort.column && 'sort-' + this.sort.descending;
  };

  changeSorting(column) {
    if (this.sort.column == column) {
      this.sort.descending = !this.sort.descending;
    }
    this.sort.column = column;
  };

  newstudent(value, element) {
    this.dataSourceTable = [];
    let dialogRef = this.dialog.open(studentComponent, {
      autoFocus: false,
      data: {
        value: value,
        data: element
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.spinner.show();
      this.subscribe2 = this.appService.allstudentData.subscribe(data => {
        this.dataSourceTable = data['tableData'];
        this.spinner.hide();
      });
    });
  }

  deletestudent(data) {
    this.dataSourceTable = this.dataSourceTable.filter((element) => {
      return element.id !== data.id;
    });
    this.Alldata.tableData = this.dataSourceTable;
    this.appService.data(this.Alldata);
  }

  ngOnDestory() {
    this.subscribe.unsubscribe();
    this.subscribe2.unsubscribe();
  }

}
