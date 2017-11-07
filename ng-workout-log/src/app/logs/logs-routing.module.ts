import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogsComponent } from "./logs.component";
import { LogsListComponent } from "./logs-list/logs-list.component";

const LogRoutes: Routes = [
    {
        path: '',
        component: LogsComponent,
        children: [
            {
                path: '',
                component: LogsListComponent
            }
        ]
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