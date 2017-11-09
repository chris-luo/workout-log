import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        HttpModule
    ],
    exports: [
        NavbarComponent,
        AppRoutingModule
    ]
})

export class CoreModule {}