import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent }  from './components/pages/index';

const appRoutes: Routes = [
    { path: 'index', component: IndexPageComponent },
    { path: '**', redirectTo: 'index'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
