import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[];

  constructor(
    private exerciseService: ExerciseService
  ) { }

  ngOnInit() {
    this.exerciseService.getExercises((exercises: Exercise[]) => {
      this.exercises = exercises;
    console.log(this.exercises)
    
    });
  }

}
