import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MontyHallService } from '../simulation-service.service';
import { SimulationResultComponent } from "../simulation-result/simulation-result.component";

@Component({
  selector: 'app-simulation-component',
  standalone: true,
  imports: [FormsModule, SimulationResultComponent],
  templateUrl: './simulation-component.component.html',
  styleUrl: './simulation-component.component.css',
})
export class SimulationComponentComponent {
  // @Input() numSimulations: any;
  // @Input() switchDoor: boolean = false;
  // @Output() display: any;

  // constructor(private montyHallService: MontyHallService) {
  //   this.display = this.montyHallService.simulateGames(
  //     this.numSimulations,
  //     this.switchDoor
  //   );
  // }

  numSimulations: any;
  switchDoor: boolean = false;
  wins: number = 0;
  losses: number = 0;

  constructor(private montyHallService: MontyHallService) {}

  startSimulation() {
    this.montyHallService.simulateGames(this.numSimulations, this.switchDoor)
      .subscribe(result => {
        this.wins = result.wins;
        this.losses = result.losses;
      });
  }
}
