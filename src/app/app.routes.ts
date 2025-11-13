import { Routes } from '@angular/router';
import { FileuploadComponent } from './components/fileupload.component/fileupload.component';
import { DatosequipoComponent } from './components/datosequipo.component/datosequipo.component';

export const routes: Routes = [
    {path:"", component: FileuploadComponent},
    {path:"equipo/:id", component: DatosequipoComponent},
];
