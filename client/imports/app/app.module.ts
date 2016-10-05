import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {METEOR_PROVIDERS} from 'angular2-meteor';
import {
    routing,
    appRoutingProviders
}  from './app.routing';

import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';
import {DemoDataService} from './demo/demo-data.service';
import { IndexPageComponent }  from './components/pages/index';
import {NavbarComponent} from "./components/navbar/navbar.component";

@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        DemoComponent,
        IndexPageComponent,
        NavbarComponent
    ],
    // Entry Components
    entryComponents: [
        AppComponent
    ],
    // Providers
    providers: [
        DemoDataService,
        appRoutingProviders
    ],
    // Modules
    imports: [
        BrowserModule,
        routing
    ],
    // Main Component
    bootstrap: [AppComponent]
})
export class AppModule {
}
