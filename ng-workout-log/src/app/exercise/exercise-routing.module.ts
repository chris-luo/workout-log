import { NgModule } from "@angular/core";
import { ExerciseComponent } from "./exercise.component";
import { Routes, RouterModule } from "@angular/router";
import { ExerciseDetailComponent } from "./exercise-detail/exercise-detail.component";

const exerciseRoutes: Routes = [
    {
        path: '',
        component: ExerciseComponent
    },
    {
        path: ':id',
        component: ExerciseDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(exerciseRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ExerciseRoutingModule {}