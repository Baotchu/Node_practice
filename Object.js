var  person = {
	Firstname : "Node",
	Lastname : "JS",
	Note : function(){
		console.log("Welcome" + " " + this.Firstname + " " + this.Lastname);
	}
}
person.Note();

var Add = {
	Address: " 570 Main Street",
	Apt: "910",
	City: "Arlington",
	Zip: "22512",
	Resident: function(){
		console.log("My address is:" + ' ' + this.Address + ' ' + this.Apt + ' ' + this.City + ' ' + this.Zip);
	}
}
Add.Resident();
	
var Add1 = {
	Zip1: {
	Address: " 570 Main Street",
	City: "Fairfax"
	},
	Zip2: {
	Address: " 570 Apt 910 Main Street",
	City: "Arlington"
	},	
	Resident1: function(){	
		console.log("My address is:" + ' ' + this.Zip1.Address + ' ' + this.Zip1.City);
		console.log("My address is: " + this.Zip2.Address + ' ' + this.Zip2.City);
	}
}
Add1.Resident1();

console.log(person.Firstname);
console.log(Add.Address);
console.log(Add1.Zip1);
console.log(person["Lastname"]);




