// src/app/app.component.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'pb-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HeroComponent, FooterComponent],
  templateUrl: './app.component.html',   // <-- correct filename
  styleUrls: ['./app.component.scss']    // <-- correct filename
})
export class AppComponent {
  // you can keep signal or just use a string; both are fine
  title = signal('personal-budget');
}

