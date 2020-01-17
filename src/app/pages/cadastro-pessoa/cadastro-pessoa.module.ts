import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroPessoaComponent],
  exports: [CadastroPessoaComponent],
  imports: [
    CommonModule,
    CadastroPessoaRoutingModule,
    FormsModule,
  ]
})
export class CadastroPessoaModule { }
