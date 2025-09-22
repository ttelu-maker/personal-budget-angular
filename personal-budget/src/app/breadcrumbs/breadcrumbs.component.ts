// src/app/breadcrumbs/breadcrumbs.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pb-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="crumbs" aria-label="Breadcrumb">
      <a routerLink="/">Home</a>
      <span aria-hidden="true">›</span>
      <ng-content></ng-content>
      <!-- or render static/auto crumbs here -->
    </nav>
  `,
  styles: [`
    .crumbs { display:flex; gap:.5rem; align-items:center; font-size:.9rem; }
    .crumbs a { text-decoration:none; color:#3b5ba9; }
    .crumbs span { color:#999; }
  `]
})
export class BreadcrumbsComponent {}
