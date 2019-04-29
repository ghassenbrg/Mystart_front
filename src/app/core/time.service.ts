import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  numberToDate(nbr) {
    let res = {};

    res['days'] = Math.floor(nbr / 86400000) ;
    nbr = nbr % 86400000;
    res['hours'] = Math.floor(nbr / 3600000) ;
    nbr = nbr % 3600000;
    res['minutes'] = Math.floor(nbr / 60000) ;
    nbr = nbr % 60000;
    res['seconds'] = Math.floor(nbr / 1000) ;

    return res;
  }

  getHours(date: Date) {
    if (date.getHours() < 10){
      return "0"+date.getHours();
    }
    return date.getHours();
  }

  getMinutes(date: Date) {
    if (date.getMinutes() < 10){
      return "0"+date.getMinutes();
    }
    return date.getMinutes();
  }

  getDate(date: Date) {
    if (date.getDate() < 10){
      return "0"+date.getDate();
    }
    return date.getDate();
  }

  getDay(date: Date) {
    switch (date.getDay()+1) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Not Found.";
    }
  }

  getMonth(date: Date) {
    switch (date.getMonth()+1) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Not Found.";
    }
  }
  
}
