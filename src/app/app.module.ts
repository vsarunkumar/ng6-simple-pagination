import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng6SimplePaginationModule } from "./ng6-simple-pagination/ng6-simple-pagination.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng6SimplePaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
