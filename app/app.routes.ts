import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';


export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
