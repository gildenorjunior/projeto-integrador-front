import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { FormPostagensComponent } from './form-postagens/form-postagens.component';
import { FormTemaComponent } from './form-tema/form-tema.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',redirectTo: 'home', pathMatch: 'full' },
  { path:'home',component: HomeComponent },
  { path:'login',component: LoginComponent },
  { path:'cadastro',component: CadastroComponent },
  { path:'feed',component: FeedComponent },
  { path:'form-postagens',component: FormPostagensComponent },
  { path:'form-tema',component: FormTemaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
