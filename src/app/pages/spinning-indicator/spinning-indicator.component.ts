import { Component, Inject,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spinning-indicator',
  templateUrl: './spinning-indicator.component.html',
  styleUrls: ['./spinning-indicator.component.scss']
})
export class SpinningIndicatorComponent {

  constructor(
    public dialogRef : MatDialogRef<SpinningIndicatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){}
}
