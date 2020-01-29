import {Component, OnInit} from '@angular/core';
import {Habitation} from '../shared/habitation/habitation.model';
import {MatDialog} from '@angular/material';
import {DialogAddHabitationComponent} from '../dialog-add-habitation/dialog-add-habitation.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    habitations: Array<Habitation> = [{name: 'Keur Sokhna Diarra'}, {name: 'Keur Sokhna Haidare'}, {name: 'Keur Sergine Diw'}];
    habitationsToShow: Array<Habitation> = [];

    habitationToAdd = new Habitation();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
        this.refreshHabitations()
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddHabitationComponent, {
            width: '500px',
            data: this.habitationToAdd
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result){
                this.habitations.push(JSON.parse(JSON.stringify(this.habitationToAdd)));
                this.habitationToAdd = new Habitation();
                this.refreshHabitations()
            }
            //this.habitations[0] = result;
        });
    }


    refreshHabitations(){
        this.habitationsToShow = (<Array<Habitation>>JSON.parse(JSON.stringify(this.habitations))).reverse();
    }

}
