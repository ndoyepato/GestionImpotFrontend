import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Habitation} from '../shared/habitation/habitation.model';
import {HabitationService} from '../shared/habitation/habitation.service';


@Component({
    selector: 'app-dialog-view-habitation',
    templateUrl: './dialog-view-habitation.component.html',
    styleUrls: ['./dialog-view-habitation.component.css']
})
export class DialogViewHabitationComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogViewHabitationComponent>,
        @Inject(MAT_DIALOG_DATA) public habitation: Habitation) {
    }

    ngOnInit() {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
