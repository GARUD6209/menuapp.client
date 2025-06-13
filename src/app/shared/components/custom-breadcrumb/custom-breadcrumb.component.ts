// src/app/shared/components/custom-breadcrumb/custom-breadcrumb.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-custom-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html',
  styleUrls: ['./custom-breadcrumb.component.css']
})
export class CustomBreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if (child.snapshot.data['breadcrumb']) {
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'],
          url: url
        });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}