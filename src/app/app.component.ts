import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimulationComponentComponent } from './simulation-component/simulation-component.component';
import { SimulationResultComponent } from './simulation-result/simulation-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SimulationComponentComponent,
    SimulationResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'monty-hall-project';
  losses: any;
  wins: any;
}
