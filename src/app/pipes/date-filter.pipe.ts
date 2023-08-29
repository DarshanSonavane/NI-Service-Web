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
            const formattedDate = newDate.getDay() + " " + this.monthNames[newDate.getMonth()] + " " + newDate.getFullYear();
            return formattedDate;
        }else {
            return '-';
        }
    }
}