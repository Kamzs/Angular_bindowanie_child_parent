import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildCopmComponent } from './child-copm/child-copm.component';
import { ChildOutputingDataComponent } from './child-outputing-data/child-outputing-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCopmComponent,
    ChildOutputingDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
