import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'pb-hero',
  standalone: true,
  // Use RouterLink for Angular v15+; RouterModule keeps it compatible with older versions
  imports: [RouterLink, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  title = 'Personal Budget';
  changeTitle() { this.title = 'Title changed!!!'; }
}

