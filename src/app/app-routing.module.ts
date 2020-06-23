import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesComponent } from './articles/articles/articles.component'
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';

const routes: Routes = [
  { path: 'autori', component: HomeComponent },
  { path: 'libri', component: AboutComponent },
  { path: '', redirectTo: '/autori', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
