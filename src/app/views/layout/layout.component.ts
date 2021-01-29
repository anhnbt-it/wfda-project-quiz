import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  title = 'C0820K1 - Quiz Project';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay()
    );
  countDown!: Subscription;
  counter = 1800; // seconds: 1800
  tick = 1000;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {}

  logout(): void {
    // this.authService.logout();
    console.log('Logout');
  }
  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter;
      if (this.counter <= 0) {
        console.log('Stopppp.....');
        this.countDown.unsubscribe();
      }
    });
  }
  ngOnDestroy(): void {
    this.countDown.unsubscribe();
  }
}
