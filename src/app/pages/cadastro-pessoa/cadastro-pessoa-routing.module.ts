import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';


const routes: Routes = [
  {
    path: '',
    component: CadastroPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPessoaRoutingModule { }
