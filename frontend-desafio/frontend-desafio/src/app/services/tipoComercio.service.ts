import { Injectable } from "@angular/core";
import { TipoComercio } from "../domain/tipoComercio";
import { Observable, from } from 'rxjs';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TipoComercioService {
constructor(private http: HttpClient) {}

    pesquisarTipoComercio(): Observable<TipoComercio[]> {
      return this.http.get<TipoComercio[]>(this.getTipoComercioUrl());
    }

    excluir(tipoComercio: TipoComercio): Observable<any> {
      return this.http.delete(this.getTipoComercioUrl()+'/'+tipoComercio.id);
    }

    salvar(tipoComercio: TipoComercio): Observable<any> {
      return this.http.post(this.getTipoComercioUrl(), tipoComercio);
    }

    alterar(tipoComercio: TipoComercio): Observable<any>{
      return this.http.put(this.getTipoComercioUrl(), tipoComercio);
    }

    getTipoComercioUrl(): string{
      return environment.apiUrl + environment.urlTipoComercio;
    }
}