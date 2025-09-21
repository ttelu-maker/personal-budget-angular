import { Component } from '@angular/core';

@Component({
  selector: 'pb-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  title = 'Personal Budget';
  changeTitle() { this.title = 'Title changed!!!'; }
}

