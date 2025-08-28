import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    // TaskListItemComponent,
    // TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
