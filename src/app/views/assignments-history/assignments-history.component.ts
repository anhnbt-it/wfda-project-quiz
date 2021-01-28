import {AfterViewInit, Component, OnInit} from '@angular/core';
import {QuizTableDataSource, QuizTableItem} from '../../layout/quiz-table/quiz-table-datasource';
import {Router} from '@angular/router';


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
export class AssignmentsHistoryComponent implements  OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: any;
  id = 0;
  // @ts-ignore

  constructor(private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
  }

}
