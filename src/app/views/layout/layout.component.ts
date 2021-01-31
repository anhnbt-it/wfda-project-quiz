import {Component, Input, OnDestroy, OnInit, Pipe} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {LocalStorageService} from '../../containers/service/localStorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = 'Quiz';
  username: string | null | undefined;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay()
    );
  countDown!: Subscription;
  counter = 1800; // seconds: 1800
  tick = 1000;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.username = localStorage.key(0);
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter;
      if (this.counter <= 0) {
        console.log('Stopppp.....');
        this.countDown.unsubscribe();
      }
    });
  }

  logout(): void {
    this.localStorageService.delete(this.username);
    // console.log(this.user);
    console.log('Logout');
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.countDown.unsubscribe();
  }
}
