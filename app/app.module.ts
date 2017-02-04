import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {routing} from './app.routes';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { MultiFieldComponent } from './multi/multifield.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,MultiFieldComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
