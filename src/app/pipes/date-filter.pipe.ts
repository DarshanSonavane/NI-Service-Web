import { Pipe , PipeTransform } from "@angular/core";

@Pipe({
    name : 'dateFilter'
})
export class DateFilterPipe implements PipeTransform{
    monthNames = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

    transform(value : any){
        if(value){
            const newDate = new Date(value);
            console.log("newDate",newDate);
            const month = newDate.getMonth() + 1;
            const formattedDate = newDate.getDate() + "/" + month + "/" + newDate.getFullYear();
            return formattedDate;
        }else {
            return '-';
        }
    }
}