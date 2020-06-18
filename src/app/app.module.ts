import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import {FormsModule} from '@angular/forms';
import {CustomSummaryPipe} from './pipes/customSummary.pipe';
import {AutoreComponent} from './autore/autore.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { AutoreFormComponent } from './autore-form/autore-form.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CustomSummaryPipe,
    AutoreComponent,
    InputFormatDirective,
    AutoreFormComponent,
    LibroFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
