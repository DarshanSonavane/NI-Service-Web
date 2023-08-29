import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinningIndicatorComponent } from './../pages/spinning-indicator/spinning-indicator.component';

@Injectable()
export class LoadingIndicatorService {
    dialogRef:any;

    constructor(public dialog : MatDialog){}

    showLoadingIndicator = () => {
        this.dialogRef = this.dialog.open(SpinningIndicatorComponent,{
            height:'auto',
            data:{},
            disableClose : true
        }) 
    }

    closeLoadingIndicator = () =>{
        if(this.dialogRef){
            this.dialogRef.close();
        }
    }

    closeAllLoadingIndicator = () =>{

    }
}