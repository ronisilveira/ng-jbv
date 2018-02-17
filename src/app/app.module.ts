import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JbvModule } from '../../public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JbvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
