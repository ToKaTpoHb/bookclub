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
import {BookService} from './services/index'
import {IndexPageComponent, BookPageComponent, BookDetailsPageComponent}  from './components/pages/index';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BooksComponent} from "./components/books/books.component";
import { LazyLoadImageModule } from 'ng2-lazyload-image'
import {BookDetailsComponent} from "./components/books/book.component";
import { BookUploadPageComponent } from "./components/pages/book.upload.page.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        DemoComponent,
        IndexPageComponent,
        NavbarComponent,
        BookPageComponent,
        BooksComponent,
        BookDetailsPageComponent,
        BookDetailsComponent,
        BookUploadPageComponent
    ],
    // Entry Components
    entryComponents: [
        AppComponent
    ],
    // Providers
    providers: [
        DemoDataService,
        BookService,
        appRoutingProviders
    ],
    // Modules
    imports: [
        BrowserModule,
        LazyLoadImageModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    // Main Component
    bootstrap: [AppComponent]
})
export class AppModule {
}
