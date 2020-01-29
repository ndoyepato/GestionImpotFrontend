import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Habitation} from '../shared/habitation/habitation.model';


@Component({
    selector: 'app-dialog-add-habitation',
    templateUrl: './dialog-add-habitation.component.html',
    styleUrls: ['./dialog-add-habitation.component.css']
})
export class DialogAddHabitationComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogAddHabitationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Habitation) {
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
