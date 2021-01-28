import {AfterViewInit, Component, OnInit} from '@angular/core';
import {QuizTableDataSource, QuizTableItem} from '../../layout/quiz-table/quiz-table-datasource';


const ELEMENT_DATA: any = [
  {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Hydrogen'}, {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'}, {id: 2, name: 'Hydrogen'}, {id: 2, name: 'Hydrogen'},
];
@Component({
  selector: 'app-assignments-history',
  templateUrl: './assignments-history.component.html',
  styleUrls: ['./assignments-history.component.css']
})
export class AssignmentsHistoryComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: any;
  // @ts-ignore

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // @ts-ignore
    this.table.dataSource = this.dataSource;
  }

}
