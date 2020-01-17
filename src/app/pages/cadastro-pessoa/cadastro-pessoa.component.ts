import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

  title: string;
  form: PessoaModel = new PessoaModel();

  listaPessoas: Array<PessoaModel> = [];

  constructor( private pessoaService: PessoaService ) { }

  ngOnInit() {
    this.title = 'MEU TESTE';

    this.pessoaService.getPessoa().subscribe( pessoas => {
      console.log("pessoas", pessoas);

      this.listaPessoas = pessoas;
    } );
  }

  submit() {

    this.pessoaService.insertPessoa(this.form)

    this.form = new PessoaModel();

    // alert('Enviou');
  }

}



export class PessoaModel {
  title: string;
  userId: number;
  completed: boolean;
  nome: string;
  idade: number;
}
