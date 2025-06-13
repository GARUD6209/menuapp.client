import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // Optional: Handle responsive behavior if needed
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          // On small screens, auto-close the sidenav
          if (this.sidenav) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          }
        } else {
          // On larger screens, keep it open and in side mode
          if (this.sidenav) {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        }
      });
  }
}
