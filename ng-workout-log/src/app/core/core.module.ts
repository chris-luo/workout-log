import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        NavbarComponent,
        AppRoutingModule,
        BrowserAnimationsModule
    ]
})

export class CoreModule {}