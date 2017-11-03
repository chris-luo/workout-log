import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "../exercise.service";
import { Exercise } from '../exercise.model';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise;

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.exercise = this.exerciseService.getExercise(+params['id']);
    })
  }

}
