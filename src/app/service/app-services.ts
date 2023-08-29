import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable() 
export class AppServices{
    BASE_URL = "http://localhost:3000";
    constructor(private http : HttpClient){

    }

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
}