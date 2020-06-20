import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomSummaryPipe} from './pipes/customSummary.pipe';
import { InputFormatDirective } from './directives/input-format.directive';
import { NewLibroFormComponent } from './new-libro-form/new-libro-form.component';
import { AutoriComponentComponent } from './autori-component/autori-component.component';
import {HttpClientModule} from '@angular/common/http';
import { LibriComponentComponent } from './libri-component/libri-component.component';
import { AutoreFormRegisterComponent } from './autore-form-register/autore-form-register.component';
import { LibroFormRegisterComponent } from './libro-form-register/libro-form-register.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSummaryPipe,
    InputFormatDirective,
    NewLibroFormComponent,
    AutoriComponentComponent,
    LibriComponentComponent,
    AutoreFormRegisterComponent,
    LibroFormRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
