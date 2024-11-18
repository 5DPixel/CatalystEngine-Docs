import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),  // Initial state (invisible)
        animate('1s ease-out', style({ opacity: 1 }))  // Animation to fade in
      ])
    ])
  ]
})
export class AppComponent {
  title = 'catalystengine-docs';
}
