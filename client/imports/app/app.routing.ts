import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexPageComponent, BookPageComponent, BookDetailsPageComponent}  from './components/pages/index';

const appRoutes: Routes = [
    {path: 'index', component: IndexPageComponent},
    {path: 'books', component: BookPageComponent},
    {path: 'books/view/:id', component: BookDetailsPageComponent},
    {path: '**', redirectTo: 'index'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
