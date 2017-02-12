// Type 1 : Call function directly!!!!!!!!!!!!!

function Sum(a, b) {
	return a + b;
}
var x = Sum(9, 3);
console.log(x);

////////////////////////////////////////////////

function divide(a, b) {
	return a / b;
}
var y = divide(9, 2);
console.log(y);

//////////////////////////////////////
// Type 2: Call function by another function
function hello() {
	console.log('Welcome node JS for beginner');
}
function callfunction(fn){
	fn();
	}
callfunction(hello);

///////////////////////////////////////
 
 function hello1() {
	console.log('Welcome node JS for beginner 1');
}
function callfunction1(fn){
	fn = hello1();
	}
function callsecond(gn) {
	gn();
}
for (var i = 1; i <5; i++) {
	
callsecond(callfunction1);
}
var m = 1;
while (m <= 3) {
	callfunction(hello);
	m = m + 1;
}
var n = 9;
if (n < 10) {
	callfunction(hello);
}

////////////////////////////////////////////////////
// Type 3: using varriable to call function
var sum1 = function(){
	console.log(" Node JS is not difficult");
}
sum1();

var z  = ("Call function is not easy");
module.exports = z;


	