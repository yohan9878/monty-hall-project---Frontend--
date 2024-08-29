import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  styleUrls: ['./simulation-result.component.css'],
})
export class SimulationResultComponent {
  @Input() wins: number = 0;
  @Input() losses: number = 0;

  get totalSimulations(): number {
    return this.wins + this.losses;
  }
  get winPercentage(): number {
    return this.totalSimulations > 0
      ? (this.wins / this.totalSimulations) * 100
      : 0;
  }
}
