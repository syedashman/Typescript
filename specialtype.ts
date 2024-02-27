      //Implicit Type Assignment//
let message= "Hello World!";

     //Explicit Type Assignment//
let text:string= "Bye world!"


//Any Data Type//
let comment:any = "Syed Muhammad Ashman"
comment= 36;
comment= true;
comment= " ";
console.log(comment);

//Unknown Data Type (Similar to Any)//
let a:unknown= "Ali";
a=29;
//casting for unknown data type//
let c = a as  number 
console.log(c);


