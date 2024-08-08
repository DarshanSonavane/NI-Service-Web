import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable() 
export class AppServices{
    // BASE_URL = "http://localhost:3000";
    BASE_URL = "http://16.170.250.91:3000";
    constructor(private http : HttpClient){}

    getAllComplaints = (userDetails : any) => {
        let url = "";
        console.log("userDetails._id", userDetails._id , userDetails.role)
        if(userDetails.role == "0"){
            url = this.BASE_URL + '/get-all-complaints';
        }else {
            url = this.BASE_URL + '/get-assigned-complaints?employeeId='+userDetails._id;
        }
        
        return this.http.get(url);
    }

    login = (data : any) =>{
        let url = this.BASE_URL + '/login';
        return this.http.post(url,data);
    }

    getEmployeeList = () =>{
        let url = this.BASE_URL + '/fetch-employee';
        return this.http.get(url);
    }

    assignCompliant = (data : any) => {
        let url = this.BASE_URL + '/assign-complaint';
        return this.http.post(url,data);
    }

    closeComplaint  = (data : any) =>{
        let url = this.BASE_URL + '/close-service-request'
        return this.http.post(url,data);
    }

    getAdminDashboardDetails = () => {
        let url = this.BASE_URL + '/get-admin-dashboard-details';
        return this.http.get(url);
    }

    saveEmployee = (data:any) =>{
        let url = this.BASE_URL + '/create-employee';
        return this.http.post(url,data)
    }

    deleteEmployee = (id : any)=>{
        let url = this.BASE_URL + '/delete-employee?id='+id;
        return this.http.get(url);
    }

    updateServiceRequest = (obj:any) =>{
        let url = this.BASE_URL + '/update-service-request';
        return this.http.post(url,obj)
    }

    getCustomerList = () =>{
        let url = this.BASE_URL + '/get-all-customers';
        return this.http.get(url);
    }

    createUpdateCustomer = (obj:any) =>{
        let url = this.BASE_URL + '/create-update-customer-details';
        return this.http.post(url,obj);
    }

    getCustomerVisitCount = (obj:any) =>{
        let url = this.BASE_URL + '/get-customer-service-request-count';
        return this.http.post(url,obj);
    }

    resetEmploteePassword = (obj:any)=>{
        let url = this.BASE_URL + '/update-employee-password';
        return this.http.post(url,obj);
    }

    reAssignCompliant = (data : any) => {
        let url = this.BASE_URL + '/re-assign-complaint';
        return this.http.post(url,data);
    }

    getCalibrationList = () =>{
        let url = this.BASE_URL + '/get-calibration-request-list';
        return this.http.get(url);
    }

    getStatesList = () =>{
        let url = this.BASE_URL + '/state-list';
        return this.http.get(url);
    }

    updateCylinderDetails = (data:any) =>{
        let url = this.BASE_URL + '/update-cylinder-details';
        return this.http.post(url,data);
    }

    getMyCalibrationList = (data:any) => {
        let url = this.BASE_URL + '/get-my-calibration-list';
        return this.http.post(url,data);
    }

    generateAndSendCalibration = (data:any)=>{
        let url = this.BASE_URL + '/generate-send-calibration';
        return this.http.post(url,data);
    }

    getCylinderDetails = ()=>{
        let url = this.BASE_URL + '/get-cylinder-details';
        return this.http.get(url);
    }

    insertMachineDetails = (data:any)=>{
        let url = this.BASE_URL + "/insert-machine-details";
        return this.http.post(url,data);
    }

    saveNotification = (data:any)=>{
        let url = this.BASE_URL + "/save-notification";
        return this.http.post(url,data);
    }

    fetchNotification = () =>{
        let url = this.BASE_URL + "/fetch-notification";
        return this.http.get(url);
    }

    deleteCalibrationById = (data : any)=>{
        let url = this.BASE_URL + '/delete-calibration-request';
        return this.http.post(url,data);
    }
}   