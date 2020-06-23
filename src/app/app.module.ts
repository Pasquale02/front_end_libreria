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
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSummaryPipe,
    InputFormatDirective,
    NewLibroFormComponent,
    AutoriComponentComponent,
    LibriComponentComponent,
    AutoreFormRegisterComponent,
    LibroFormRegisterComponent,
    AboutComponent,
    HomeComponent,
    PrivacyComponent,
    TermsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
