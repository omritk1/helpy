import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    NavComponent,
    FormComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
