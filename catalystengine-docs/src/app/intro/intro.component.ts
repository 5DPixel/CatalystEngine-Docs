import { Component } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class IntroComponent {
  constructor(private router: Router) {}  // Inject Router service

  // Method to navigate to a different route
  onButtonClick() {
    this.router.navigate(['/getting-started']);
  }
}
