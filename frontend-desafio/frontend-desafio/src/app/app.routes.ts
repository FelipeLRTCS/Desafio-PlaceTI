import { Routes } from '@angular/router';
import { ListarCidadesComponent } from './components/cidades/listar-cidades/listar-cidades.component';
import { ListarComerciosComponent } from './components/comercios/listar-comercios/listar-comercios.component';
import { ListarTiposComerciosComponent } from './components/tiposComercios/listar-tipos-comercios/listar-tipos-comercios.component';

export const routes: Routes = [
    {path: '', component: ListarCidadesComponent},
    {path: 'listar-comercios', component: ListarComerciosComponent},
    {path: 'listar-tipos-comercios', component: ListarTiposComerciosComponent}
];
