import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../containers/service/group.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
];


@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.css']
})
export class QuizDashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;
  groups: any;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService) {
  }


  ngOnInit(): void {
    this.groupService.getAll().subscribe((res: any) => {
      this.groups = res.data;
    });
  }

  showDetail(id: number): void {
    this.router.navigate(['detail-group'], {queryParams: {id}});
  }
}
