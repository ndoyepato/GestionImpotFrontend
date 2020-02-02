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
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {DialogEditHabitationComponent} from './dialog-edit-habitation/dialog-edit-habitation.component';
import {DialogDeleteHabitationComponent} from './dialog-delete-habitation/dialog-delete-habitation.component';
import {DialogViewHabitationComponent} from './dialog-view-habitation/dialog-view-habitation.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DialogAddHabitationComponent,
        DialogEditHabitationComponent,
        DialogViewHabitationComponent,
        DialogDeleteHabitationComponent
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
        MatCheckboxModule,
        FormsModule,
        HttpClientModule
    ],
    entryComponents: [
        DialogAddHabitationComponent,
        DialogEditHabitationComponent,
        DialogDeleteHabitationComponent,
        DialogViewHabitationComponent
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
