'use strict';


var hours = ['6 AM ', '7 AM', '8 AM ', '9 AM', '10 AM ', '11 AM', '12 PM ', '1 PM', '2 PM ', '3 PM', '4 PM ', '5 PM', '6 PM ', '7 PM'];

var parent= document.getElementById('salesTable');
var articleElement=document.createElement('article');
var ulElement = document.createElement('ul');
articleElement.appendChild(ulElement);
parent.appendChild(articleElement);
//parent.appendChild(ulElement);

function showTable(locObj) 
{
    for (var x = 0; x < hours.length; x++) {

        var liElement = document.createElement('li');
        var liElement2 = document.createElement('li');
      


        // append
        ulElement.appendChild(liElement);
        ulElement.appendChild(liElement2);
      

        // list content
        liElement.textContent = hours[x];
        liElement2.textContent = locObj.CustEachHour[x];
        

    }

}


let Seattle =
{   
    nameObj: "Seattle",
    minCust: 23,
    maxCust: 65,
    AvgCookie: 6.3,
    CustEachHour: [],
    RandCust: function () {
        for (var i = 0; i < hours.length; i++) {
            this.CustEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
            
        }
    }

}
Seattle.RandCust();
showTable(Seattle);
//console.log(Seattle.CustEachHour);



let Tokyo={

nameObj: "Tokyo",
 minCust:3,
 maxCust:24,
 AvgCookie: 1.2,
 CustEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.CustEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
    }
}
}

Tokyo.RandCust();
showTable(Tokyo);

let Dubai={
nameObj: "Dubai",
 minCust:11,
 maxCust:38,
 AvgCookie: 3.7,
 CustEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.CustEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        
    }
}
}

Dubai.RandCust();
showTable(Dubai);

let Paris={
nameObj: "Paris",  
 minCust:20,
 maxCust:38,
 AvgCookie: 2.3,
 CustEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.CustEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        
    }
}
}

Paris.RandCust();
showTable(Paris);


let lima={
 nameObj: "lima",   
 minCust:2,
 maxCust:16,
 AvgCookie: 4.6,
 CustEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.CustEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        
    }
}
}

lima.RandCust();
showTable(lima);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////////////



