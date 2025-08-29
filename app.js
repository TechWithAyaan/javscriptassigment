var Fullname = "Ayaan",age = 20, city = "Karachi";
alert(Fullname);
alert(age)
alert(city)
alert("Complete : Declare 3 value in one statment");

var varName = "var varible name"
alert(varName);
var d1user  = "1user variable declare"
alert(d1user)
alert("Complete : Declare variable with illegal name");
document.writeln("<h1>Rules for naming JS variables</h1>")
document.writeln("<h4>b) Variable names can only contain Letter - Number - $Dollor Sign -  _UnderScore</h4> <br> For Example: $myvarible")
// ✅ Part b
document.writeln("<h4>b) Variable names can only contain: Letter - Number - $ (Dollar Sign) - _ (Underscore)</h4>");
document.writeln("For Example: <code>$my_1stVariable</code><br><br>");

// ✅ Part c
document.writeln("<h4>c) Variable names can only begin with: Letter - $ (Dollar Sign) - _ (Underscore)</h4>");
document.writeln("For Example: <code>$name</code>, <code>_name</code>, <code>name</code>");

// part d
document.writeln("<h4>d) Variable names are case Senstive</h4>")
//  part e 
document.writeln("<h4> e) Variable names should not be JS Keyword</h4>")
document.writeln("<h1>Complete Chap 4 </h1>")
document.writeln("<h1>Start Chap 5 </h1>")
var value3 = 3;
var value5 = 5;
var result = value3+value5;
document.writeln("<span> Sum of 3 and 5 is </span> <span>"+result+"<br></span>")
result = value3-value5;
document.writeln("<span> Subtraction of 3 and 5 is </span> <span>"+result+"<br>     </span>")
result = value3*value5;
document.writeln("<span> Multiply of 3 and 5 is </span> <span>"+result+"<br></span>")
result = value3/value5;
document.writeln("<span> Divide of 3 and 5 is </span> <span>"+result+"<br></span>")
result = value3%value5;
document.writeln("<span> Modulus of 3 and 5 is </span> <span>"+result+"<br></span>")
document.writeln("<h1>Question #3</h1> <br>")
var qu = 
document.writeln("<b>Value after Declaration </b>"+" "+qu +"<br>")
var qu = 5;
var num =5;
document.writeln("Intial value:"+" "+qu+"<br>")
var qu = ++num;
var seven = 7;
document.writeln("Value after increament is:"+" "+qu+"<br>")
let foria = document.writeln("Value after Addition is:"+(num+seven)+"<br>")
document.writeln("Value after Decrement is:"+(--num+seven)+"<br>")
document.writeln ("The remainder is:"+(qu%num)+"<br>")

var ticket = 5;
var ticketPrice = 600;
var totalPrice = ticket * ticketPrice;
document.writeln("<h1>Question #4</h1> <br>")
document.writeln("Total cost to buy " + ticket + " tickets to a movie is " + totalPrice + " PKR <br>")
document.writeln("<h1>Question #5</h1> <br>")
// document.writeln("<h1>Complete Chap 5 </h1>")
for (var i = 1; i <= 10; i++) {
   document.writeln("4*"+i+"= "+4*i+"<br>")
}
document.writeln("<h1>Question #6</h1> <br>")
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");
var fahrenheit = 77;
var celsius = (fahrenheit - 32) * 5/9;
document.writeln(fahrenheit + "°F is " + celsius + "°C<br>");
document.writeln("<h1>Question #7</h1> <br>")
document.writeln("<h3>Shoppiing List</h3> <br>")
var item1 = 650;
var item1Qty = 3;
var item2 = 100;
var item2Qty = 7;
var shipping = 100;
var p = "Price of item"
var sign = "="
var totalCost = (item1 * item1Qty) + (item2 * item2Qty) + shipping;

document.writeln (p + "1 is "+ item1 + " " + sign + " " + item1Qty + "<br>")
document.writeln (p + "2 is "+ item2 + " " + sign + " " + item2Qty + "<br>")
document.writeln ("Shipping is"+" "+"="+" "+shipping +"<br>")
document.writeln ("Total Cost of Your Order =" + totalCost)
document.writeln("<h1>Question #8</h1> <br>")
document.writeln("<h1>Mark Sheet</h1> <br>")
var totalMarks = 980;
var marksObtained = 804;
var per = marksObtained * 100 / totalMarks;
document.writeln("Total marks: " +  totalMarks + "<br>")
document.writeln("Obtained marks: " +  marksObtained + "<br>")
document.writeln("Percentage"+per)
document.writeln("<h1>Question #9</h1> <br>")
document.writeln('<h1>Currency in PKR</h1>')

var us = 10;
var us1pk = 104.80;
var sk = 25;
var sk1pk = 28;
var convertpkr = (us * us1pk) + (sk * sk1pk)
document.writeln("Total Currency is PKR:- "+convertpkr)
document.writeln("<h1>Question #10</h1> <br>")
var calc= 5;
document.writeln("The Final Output is: "+(calc + 5)*10/2)
document.writeln("<h1>Question #11</h1> <br>")
var currentYear = 2025;
var birthYear = 2012;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.writeln("Current Year is "+currentYear+"<br>")
document.writeln("Birth Year is "+birthYear+"<br>")
document.writeln("The either age is "+age2+"  or "+ age1 + " Years old ")
document.writeln("<h1>Question #12</h1> <br>")
var radius = 20; // radius in cm
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.writeln("The circumference is " + circumference + "<br>");
document.writeln("The area is " + area);

document.writeln("<h1>Question #13</h1> <br>")
var favSnack = "Choclate Chip";
var currentAge = 12;
var estAge = 60;
var cookiePrice = 10;
var estagecl = estAge - currentAge;
var multiforlifecalc =cookiePrice * 30 ; //30 days 
var yearlycalc = multiforlifecalc *12; // years
document.writeln("My Favoriate Snack "+favSnack+"<br>")
document.writeln("Current Age "+currentAge+"<br>")
document.writeln("Estimatied Age "+estAge+"<br>")
document.writeln("Total Age "+estagecl+"<br>")
console.log(yearlycalc *estagecl)