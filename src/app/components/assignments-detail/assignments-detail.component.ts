import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(data => {
      this.idA = data.id;
    });
  }

  findById(id: number ): void {
    for (const item of ELEMENT_DATA) {
      if (item.id === this.idA) {
        this.dataSource = item;
      }
    }
  }

  ngOnInit(): void {
    this.findById(this.idA);
  }

}
