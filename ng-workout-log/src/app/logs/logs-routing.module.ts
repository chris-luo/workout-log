import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogsComponent } from "./logs.component";

const LogRoutes: Routes = [
    {
        path: '',
        component: LogsComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(LogRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LogsRoutingModule {}