import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { StoreModule } from '@ngrx/store';
import { IndexComponent } from './pages/index/index.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { IconComponent } from './components/ui/icon/icon.component';
import { InputComponent } from './components/ui/input/input.component';
import { BadgeComponent } from './components/ui/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent,
    InputComponent,
    TaskListComponent,
    BadgeComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
