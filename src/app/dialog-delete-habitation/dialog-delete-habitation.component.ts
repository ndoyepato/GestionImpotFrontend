import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Habitation} from '../shared/habitation/habitation.model';
import {HabitationService} from '../shared/habitation/habitation.service';


@Component({
    selector: 'app-dialog-delete-habitation',
    templateUrl: './dialog-delete-habitation.component.html',
    styleUrls: ['./dialog-delete-habitation.component.css']
})
export class DialogDeleteHabitationComponent implements OnInit {
    isLoading = false;
    isFail = false;

    constructor(
        public habitationService: HabitationService,
        public dialogRef: MatDialogRef<DialogDeleteHabitationComponent>,
        @Inject(MAT_DIALOG_DATA) public habitation: Habitation) {
    }

    ngOnInit() {
        //
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete() {
        this.habitationService.delete(this.habitation).subscribe(
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
