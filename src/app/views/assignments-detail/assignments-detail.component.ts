import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AssignmentService} from '../../containers/service/api/assignment.service';

const ELEMENT_DATA: any = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'},
];

@Component({
  selector: 'app-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.css']
})

export class AssignmentsDetailComponent implements OnInit {
  dataSource: any;
  idA = 0;

  constructor(private activeRoute: ActivatedRoute, private service: AssignmentService) {}


  findById(id: number ): void {
    this.service.getById(id).subscribe((data) => this.dataSource = data);
  }

  ngOnInit(): void {

// @ts-ignore
    this.idA = this.activeRoute.snapshot.paramMap.get('id');
    this.findById(this.idA);
  }

}
