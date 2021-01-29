import { Component, OnInit} from '@angular/core';
import {AssignmentService} from '../../containers/service/api/assignment.service';


@Component({
  selector: 'app-assignments-history',
  templateUrl: './assignments-history.component.html',
  styleUrls: ['./assignments-history.component.css']
})
export class AssignmentsHistoryComponent implements  OnInit {
  displayedColumns: string[] = ['id',  'Point', 'Exam Name', 'Start Time' , 'action' ] ;
  dataSource: any;
  id = 1;
  // @ts-ignore
  constructor(private service: AssignmentService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.service.getAll(this.id).subscribe((data) => this.dataSource = data);
  }

}
