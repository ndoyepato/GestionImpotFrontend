import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Habitation} from '../shared/habitation/habitation.model';
import {HabitationService} from '../shared/habitation/habitation.service';


@Component({
    selector: 'app-dialog-add-habitation',
    templateUrl: './dialog-add-habitation.component.html',
    styleUrls: ['./dialog-add-habitation.component.css']
})
export class DialogAddHabitationComponent implements OnInit {
    isLoading = false;
    isFail = false;

    constructor(
        public habitationService: HabitationService,
        public dialogRef: MatDialogRef<DialogAddHabitationComponent>,
        @Inject(MAT_DIALOG_DATA) public habitation: Habitation) {
    }

    ngOnInit() {
        //
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    displayChechValue() {
        console.log('Have Piscine: ' + this.habitation.havePiscine);
    }

    toggleHabitationType() {
        this.habitation.isIndividual = !this.habitation.isIndividual;
    }

    add() {
        this.habitationService.add(this.habitation).subscribe(
            (result) => {
                this.isLoading = false;
                this.dialogRef.close(this.habitation);
                console.log("successfuly");
                console.log(result)
            },
            (error) => {
                this.isLoading = false;
                this.isFail = true;
                console.log("erreur");
                console.log(error)
            }
        );
    }

    toggleFail(){
        this.isFail = !this.isFail;
    }

}
