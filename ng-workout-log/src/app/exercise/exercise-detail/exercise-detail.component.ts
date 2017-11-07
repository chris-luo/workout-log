import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "../exercise.service";
import { Exercise, LogEntry, Set } from '../exercise.model';
import { ActivatedRoute, Params, Router } from "@angular/router";
import * as moment from "moment";

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
      reps: f.value.reps,
      dateTime: moment().format()
    }
    this.sets.push(set);
  }

  onComplete() {
    const logEntry = new LogEntry(this.exercise.name, moment().format() ,this.sets);
    console.log(logEntry);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}