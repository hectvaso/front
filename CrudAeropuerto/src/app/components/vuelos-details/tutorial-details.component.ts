import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/vuelos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelos } from 'src/app/models/vuelos.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  currentTutorial: Vuelos = {
    airline: '',
    time: '',
    fromvuelo: '',
    remarks: '',
    tovuelo: '',
    gate: '',
    typeVuelo: '',
    flightNo: 0
  };
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      airline: this.currentTutorial.airline,
      time: this.currentTutorial.time,
      fromvuelo: this.currentTutorial.fromvuelo,
      remarks: this.currentTutorial.remarks,
      tovuelo: this.currentTutorial.fromvuelo,
      gate: this.currentTutorial.gate,
      typeVuelo: this.currentTutorial.typeVuelo,
      flightNo: this.currentTutorial.flightNo
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
      
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
