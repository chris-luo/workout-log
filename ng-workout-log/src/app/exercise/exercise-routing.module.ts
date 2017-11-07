import { NgModule } from "@angular/core";
import { ExerciseComponent } from "./exercise.component";
import { Routes, RouterModule } from "@angular/router";
import { ExerciseDetailComponent } from "./exercise-detail/exercise-detail.component";
import { ExerciseListComponent } from "./exercise-list/exercise-list.component";

const exerciseRoutes: Routes = [
    {
        path: '',
        component: ExerciseComponent,
        children: [
            {
                path: '',
                component: ExerciseListComponent
            },
            {
                path: ':id',
                component: ExerciseDetailComponent
            }
        ]
    },

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