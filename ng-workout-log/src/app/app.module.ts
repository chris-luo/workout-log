import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ExerciseService } from './exercise/exercise.service';
import { LogsService } from './logs/logs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [ExerciseService, LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
