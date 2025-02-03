import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from "../domain/cidade";
import { Observable, from } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable()
export class CidadeService {

  constructor(private http: HttpClient) {}

    pesquisarCidades(): Observable<Cidade[]> {
      return this.http.get<Cidade[]>(this.getCidadeUrl());
    }

    excluir(cidade: Cidade): Observable<any> {
      return this.http.delete(this.getCidadeUrl()+'/'+cidade.id);
    }

    salvar(cidade: Cidade): Observable<any> {
      return this.http.post(this.getCidadeUrl(), cidade);
    }

    alterar(cidade: Cidade): Observable<any>{
      return this.http.put(this.getCidadeUrl(), cidade);
    }

    getCidadeUrl(): string{
      return environment.apiUrl + environment.urlCidades;
    }

}
