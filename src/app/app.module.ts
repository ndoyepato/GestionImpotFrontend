import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HomeComponent} from './home/home.component';
import { DialogAddHabitationComponent } from './dialog-add-habitation/dialog-add-habitation.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DialogAddHabitationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule
    ],
    entryComponents: [
        DialogAddHabitationComponent
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
