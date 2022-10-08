import { Component, OnInit } from '@angular/core';
import { Vuelos } from 'src/app/models/vuelos.model';
import { TutorialService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  vuelo: Vuelos = {
    airline: '',
    time: '',
    fromvuelo: '',
    remarks: '',
    tovuelo: '',
    gate: '',
    typeVuelo: '',
    flightNo: 0
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      airline: this.vuelo.airline,
      time: this.vuelo.time,
      fromvuelo: this.vuelo.fromvuelo,
      remarks: this.vuelo.remarks,
      tovuelo: this.vuelo.fromvuelo,
      gate: this.vuelo.gate,
      typeVuelo: this.vuelo.typeVuelo,
      flightNo: this.vuelo.flightNo

      

    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.vuelo = {
      airline: '',
    time: '',
    fromvuelo: '',
    remarks: '',
    tovuelo: '',
    gate: '',
    typeVuelo: '',
    flightNo: 0
    };
  }

}
