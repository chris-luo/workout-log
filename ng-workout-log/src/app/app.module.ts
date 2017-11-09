import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ExerciseService } from './exercise/exercise.service';
import { LogsService } from './logs/logs.service';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [ExerciseService, LogsService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
