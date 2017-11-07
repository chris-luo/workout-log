import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "../exercise.service";
import { Exercise } from '../exercise.model';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise;
  sets: Set[] = [];

  constructor(
    private exerciseService: ExerciseService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.exercise = this.exerciseService.getExercise(+params['id']);
    })
  }

  onAddSet(f) {
    let set: Set = {
      weight: f.value.weight,
      reps: f.value.reps
    }
    this.sets.push(set);
  }

  onComplete() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

interface Set {
  weight: number,
  reps: number
}
