//1.calculate simple Interest
let P=10000;
let N=3;
let R=5; //in %
let SI=P*N*R/100;
console.log("1.Simple Interest:"+SI)

//2.calculate the Area of Garden
let r=14; //in meter
let pi=3.14159;
let cir_area=pi*r*r;
console.log("2.Gardan Area:"+cir_area+"m^2");
console.log("2.Gardan Area:"+Math.floor(cir_area)); //without decimal num


//3.Swap the Price without using temp
let A=150;
let B=200;
console.log("3.Before Swaping:"+"A:"+A,"B:"+B);
A=A+B;//A=350
B=A-B;//B=150
A=A-B;//A=200
console.log("3.After Swaping:"+"A="+A,"B="+B);

//4.Calculate the Average
let num1=85;
let num2=90;
let num3=95;
let avg=(num1+num2+num3)/3;
console.log("4.Average of A Student:"+avg);

//5.Calculate the Compound Interest
let P1=5000;
let r1=6; //in percentage
let T=4;
let R1=r1/100;
let Amount=P1*(1+R1)^4;
console.log("5.Compound_Interest:"+Amount);

//6.Calculate the Profit
let CP=800; //Consume Price
let SP=950; //Selling Price
let Profit=SP-CP;
console.log("6.Profit:"+Profit);

//7.Calculate the Fencing Requied for a Rectanglar Field
let l=50;//in meters
let w=30;//in meters
let Area_Rec=2*(l*w);
console.log("7.Area_Rec:"+Area_Rec+"m^2");

//8.Bitwise AND
let x=25,y=19;
let Bit_and=x&y;
console.log("8.Bitwise_AND_Operator:"+Bit_and);


//9.Convert Celsius to Fahrenheit
let celsius=22; // in degree Celsius
let Fahrenheit=(celsius*9/5)+32;
console.log("Celsius to Fahrenheit:" +Fahrenheit);

//10.Calculate the Area of Cylinder
let r2=5; // radius
let h=10; // height
let pi1=3.14159;
let Cylinder=pi1*r2*r2*h;
console.log("10.Volume of Water tank or Cylinder:"+Cylinder+"m^3");


