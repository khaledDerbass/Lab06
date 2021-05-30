'use strict';


function getRandomCust(cust) {
    return Math.floor(Math.random() * cust);
  }


  let Seattle={
    min_cust:23,
    max_cust:65,
    Avg_Cookie: getRandomCust(6.3)
   }

   let Tokyo={
    min_cust:3,
    max_cust:24,
    Avg_Cookie: getRandomCust(1.2)
   }
   let Dubai={
    min_cust:11,
    max_cust:38,
    Avg_Cookie: getRandomCust(3.7)
   }
   let Paris={
    min_cust:20,
    max_cust:38,
    Avg_Cookie: getRandomCust(2.3)
   }
   let lima={
    min_cust:2,
    max_cust:16,
    Avg_Cookie: getRandomCust(4.6)
   }