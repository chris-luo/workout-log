import { NgModule } from "@angular/core";
import { ExerciseComponent } from "./exercise.component";
import { Routes, RouterModule } from "@angular/router";

const exerciseRoutes: Routes = [
    {
        path: '',
        component: ExerciseComponent
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