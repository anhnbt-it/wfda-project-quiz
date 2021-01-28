import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

const ELEMENT_DATA: any = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'}, {id: 2, name: 'Hydrogen'},
  {id: 2, name: 'Hydrogen'}, {id: 2, name: 'Hydrogen'}, {id: 2, name: 'Hydrogen'},
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


  // @ts-ignore
  findAsissgById( id ) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (ELEMENT_DATA[i].id == this.idA) {
this.dataSource = ELEMENT_DATA[i];
      }

    }
  }

  // @ts-ignore
  ngOnInit(): void {
    this.findAsissgById(this.idA);
  }

}
