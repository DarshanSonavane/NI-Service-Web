import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppServices } from 'src/app/service/app-services';
import { LoadingIndicatorService } from 'src/app/service/loading-indicator.service';

@Component({
  selector: 'app-machine-model-details',
  templateUrl: './machine-model-details.component.html',
  styleUrls: ['./machine-model-details.component.scss']
})
export class MachineModelDetailsComponent {

  machineDetailsForm: FormGroup = new FormGroup({});
  selectedType:any;
  config :any;
  feedback:any;
  machineNumber:any;
  machineTypes = [ { "id": 1, "label": "NPM MGA1" }, { "id": 2, "label": "NPM MGA2" }, { "id": 3, "label": "NPM SMIIIB" }, { "id": 4, "label": "NUVO 10" }, { "id": 5, "label": "NUVO 20" } ];
  constructor(private formBuilder : FormBuilder ,public dialogRef : MatDialogRef<MachineModelDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data : MachineModelDetailsComponent , private service : AppServices , private toast : ToastrService , private loader : LoadingIndicatorService){
      this.config = data;
  }

  ngOnInit(){
    this.machineDetailsForm = this.formBuilder.group({
      machineType : new FormControl('',[Validators.required]),
      machineNumber : new FormControl('',[Validators.required])
    })
  }

  onTypeChange = (event:any)=>{
    this.selectedType = event;
  }

  insertMachineDetails = () =>{
    try{
      console.log("Machine Type", this.machineDetailsForm.controls['machineType'].value);
      console.log("machineNumber======", this.machineDetailsForm.controls['machineNumber'].value);
      console.log("Status", this.selectedType);
      console.log("Config", this.config); 
      let obj :any = {};
      obj['model'] = this.machineDetailsForm.controls['machineType'].value;
      obj['machineNumber'] = this.machineDetailsForm.controls['machineNumber'].value;
      this.service.insertMachineDetails(obj).subscribe((res:any)=>{
        this.toast.success("Machine Details Updated Successfully!");
        this.dialogRef.close('submitted');
      })
    }catch(err){
      console.log(err);
    }
  }
}
