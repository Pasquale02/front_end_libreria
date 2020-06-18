import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomSummaryPipe} from './pipes/customSummary.pipe';
import {AutoreComponent} from './autore/autore.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { AutoreFormComponent } from './autore-form/autore-form.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewLibroFormComponent } from './new-libro-form/new-libro-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CustomSummaryPipe,
    AutoreComponent,
    InputFormatDirective,
    AutoreFormComponent,
    LibroFormComponent,
    SignupFormComponent,
    NewLibroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
