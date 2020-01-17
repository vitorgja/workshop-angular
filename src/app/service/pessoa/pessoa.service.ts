import { Environment } from './../../../environments/environments.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { PessoaModel } from 'src/app/pages/cadastro-pessoa/cadastro-pessoa.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private env: Environment = environment;

  constructor(private http: HttpClient) { }

  getPessoa(): Observable<Array<PessoaModel>> {
    return this.http.get<Array<PessoaModel>>(`${this.env.api_url}/todos`);
  }
  insertPessoa(pessoa: PessoaModel) {
    this.http.post(`${this.env.api_url}/todos`, pessoa);
  }


}
