import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';   // if your project has app.config.ts

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
// If you don't have app.config.ts, use: bootstrapApplication(AppComponent)
