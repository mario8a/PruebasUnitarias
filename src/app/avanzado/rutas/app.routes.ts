import {Routes} from '@angular/router';
import { HospitalComponent } from 'src/app/intermedio2/hospital/hospital.component';
import {MedicoComponent} from '../../intermedio2/medico/medico.component';
import { IncrementadorComponent } from 'src/app/intermedio2/incrementador/incrementador.component';


export const RUTAS: Routes = [
    {path: 'hospial', component: HospitalComponent},
    {path: 'medico/:id', component: MedicoComponent},
    {path: '**', component: IncrementadorComponent}
];