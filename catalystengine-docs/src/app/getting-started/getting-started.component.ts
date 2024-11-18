import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss'
})
export class GettingStartedComponent {
  constructor(private router: Router) {}  // Inject Router service

  // Method to navigate to a different route
  onButtonClick() {
    this.router.navigate(['/tutorials/writing-a-json-scene']);
  }
}
