import { Injectable } from "@angular/core";
import { Comercio } from "../domain/comercio";
import { Observable, from } from 'rxjs';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComercioService {
constructor(private http: HttpClient) {}

        pesquisarComercio(): Observable<Comercio[]> {
          return this.http.get<Comercio[]>(this.getComercioUrl());
        }
    
        excluir(comercio: Comercio): Observable<any> {
          return this.http.delete(this.getComercioUrl()+'/'+comercio.id);
        }
    
        salvar(comercio: Comercio): Observable<any> {
          return this.http.post(this.getComercioUrl(), comercio);
        }
    
        alterar(comercio: Comercio): Observable<any>{
          return this.http.put(this.getComercioUrl(), comercio);
        }
    
        getComercioUrl(): string{
          return environment.apiUrl + environment.urlComercios;
        }
}