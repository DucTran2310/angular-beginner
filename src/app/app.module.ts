import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentOverviewComponent,
    MessagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
