import { NgModule } from "@angular/core";
import { ExerciseRoutingModule } from "./exercise-routing.module";
import { ExerciseComponent } from "./exercise.component";
import { ExerciseListComponent } from "./exercise-list/exercise-list.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ExerciseComponent,
        ExerciseListComponent
    ],
    imports: [
        CommonModule,
        ExerciseRoutingModule,
        SharedModule
    ]
})

export class ExerciseModule {}