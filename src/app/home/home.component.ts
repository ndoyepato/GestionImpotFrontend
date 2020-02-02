import {Component, OnInit} from '@angular/core';
import {Habitation} from '../shared/habitation/habitation.model';
import {MatDialog} from '@angular/material';
import {DialogAddHabitationComponent} from '../dialog-add-habitation/dialog-add-habitation.component';
import {DialogDeleteHabitationComponent} from '../dialog-delete-habitation/dialog-delete-habitation.component';
import {DialogEditHabitationComponent} from '../dialog-edit-habitation/dialog-edit-habitation.component';
import {DialogViewHabitationComponent} from '../dialog-view-habitation/dialog-view-habitation.component';
import {HabitationService} from '../shared/habitation/habitation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    habitations: Array<Habitation> = [
        {
            id: 1,
            proprietaire: 'Sokhna Diarra',
            adresse: 'Dakar',
            surface: 240,
            nbreDePiece: 2,
            havePiscine: true,
            isIndividual: true,
            nbreEmploye: 12
        },
        {
            id: 2,
            proprietaire: 'Astou Fall',
            adresse: 'Guediaway',
            surface: 342,
            nbreDePiece: 4,
            havePiscine: false,
            isIndividual: false,
            nbreEmploye: 3
        },
        {
            id: 3,
            proprietaire: 'Abdou Ndiaye',
            adresse: 'Rufisque',
            surface: 234,
            nbreDePiece: 6,
            havePiscine: true,
            isIndividual: true,
            nbreEmploye: 5
        }
    ];
    habitationsToShow: Array<Habitation> = [];

    habitationToAdd = new Habitation();
    habitationToEdit = new Habitation();
    habitationToDelete = new Habitation();

    constructor(public dialog: MatDialog, public habitationService: HabitationService) {
    }

    ngOnInit() {
        this.refreshHabitations();
        this.getAllHI();
        this.getAllHP();
    }

    openDialog(): void {

        const dialogRef = this.dialog.open(DialogAddHabitationComponent, {
            width: '500px',
            data: this.habitationToAdd
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                this.habitations.push(JSON.parse(JSON.stringify(this.habitationToAdd)));
                this.habitationToAdd = new Habitation();
                this.refreshHabitations();
            }
        });
    }

    onView(event: any) {
        console.log('On View ...');
        console.log(event);
        const dialogRef = this.dialog.open(DialogViewHabitationComponent, {
            width: '500px',
            data: this.habitations[Number(event.target.title)]
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.habitations[0] = result;
        });
    }

    onDelete(event: any) {
        this.habitationToDelete = this.habitations[Number(event.target.title)];
        const dialogRef = this.dialog.open(DialogDeleteHabitationComponent, {
            width: '500px',
            data: this.habitationToDelete
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                delete (this.habitationToDelete);
                this.refreshHabitations();
            }
            //this.habitations[0] = result;
        });
    }

    onEdit(event: any) {
        this.habitationToEdit = this.habitations[Number(event.target.title)];
        const dialogRef = this.dialog.open(DialogEditHabitationComponent, {
            width: '500px',
            data: this.habitationToEdit
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                this.refreshHabitations();
            }
            //this.habitations[0] = result;
        });
    }


    refreshHabitations() {
        this.habitationsToShow = (<Array<Habitation>>JSON.parse(JSON.stringify(this.habitations))).reverse();
    }

    deleteLocalHabitation(id) {
        let i = 0;
        let i_d = -1;
        this.habitations.forEach((habit) => {
            if (habit.id == id) {
                i_d = i;
            }
            i++;
        });
    }

    getAllHI() {
        this.habitationService.getAllHI().subscribe(
            (result) => {
                console.log('HI bien recu');
                (<Array<Habitation>>result).forEach(
                    (habit) => this.habitations.push(habit)
                );
                this.refreshHabitations()
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getAllHP() {
        this.habitationService.getAllHP().subscribe(
            (result) => {
                console.log('HP bien recu');
                (<Array<Habitation>>result).forEach(
                    (habit) => this.habitations.push(habit)
                );
                this.refreshHabitations()
            },
            (error) => {
                console.log(error);
            }
        );
    }

}
