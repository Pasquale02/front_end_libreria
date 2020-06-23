import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LibroDettagliComponent} from './libro-dettagli/libro-dettagli.component';
import {AutoreDettagliComponent} from './autore-dettagli/autore-dettagli.component';

const routes: Routes = [
  { path: 'autori', component: HomeComponent },
  { path: 'autore/:id', component: AutoreDettagliComponent },
  { path: 'libri', component: AboutComponent },
  { path: 'libro/:id', component: LibroDettagliComponent },
  { path: '', redirectTo: '/autori', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
