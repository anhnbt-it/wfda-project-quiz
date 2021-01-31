import {AfterViewInit, Component, OnInit} from '@angular/core';

const ELEMENT_DATA: any = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'}
];

@Component({
  selector: 'app-assignments-history',
  templateUrl: './assignments-history.component.html',
  styleUrls: ['./assignments-history.component.css']
})
export class AssignmentsHistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: any;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
  }

}
