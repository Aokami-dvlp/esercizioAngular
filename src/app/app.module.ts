import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowCounterComponent } from './show-counter/show-counter.component';
import { EditCounterComponent } from './edit-counter/edit-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowCounterComponent,
    EditCounterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
