import { NgModule } from "@angular/core";
import { MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
@NgModule({
    imports: [
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ]
})

export class SharedModule {}