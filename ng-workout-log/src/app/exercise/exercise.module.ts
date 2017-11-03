import { NgModule } from "@angular/core";
import { ExerciseRoutingModule } from "./exercise-routing.module";
import { ExerciseComponent } from "./exercise.component";
import { ExerciseListComponent } from "./exercise-list/exercise-list.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ExerciseListItemComponent } from './exercise-list/exercise-list-item/exercise-list-item.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

@NgModule({
    declarations: [
        ExerciseComponent,
        ExerciseListComponent,
        ExerciseListItemComponent,
        ExerciseDetailComponent
    ],
    imports: [
        CommonModule,
        ExerciseRoutingModule,
        SharedModule
    ]
})

export class ExerciseModule {}