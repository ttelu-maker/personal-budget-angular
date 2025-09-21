import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pb-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {}
