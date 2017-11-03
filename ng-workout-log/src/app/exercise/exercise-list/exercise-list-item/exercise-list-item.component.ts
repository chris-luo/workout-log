import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../../exercise.model';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-exercise-list-item',
  templateUrl: './exercise-list-item.component.html',
  styleUrls: ['./exercise-list-item.component.css']
})
export class ExerciseListItemComponent implements OnInit {
  @Input() exercise: Exercise;
  @Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onExercise() {
    this.router.navigate([this.index], { relativeTo: this.route });
  }

}
