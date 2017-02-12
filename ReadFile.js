var fs = require('fs');
var content = fs.readFileSync( __dirname + "/listname.txt");
//console.log(content);
console.log(content.toString());
//console.log(content.toJSON());

// Doc file anh 

var fs = require('fs');
var content1 = fs.readFileSync( __dirname + "/1.jpg");
console.log(content1);
//console.log(content.toString());
console.log(content1.toJSON());

/* var fs = require('fs');
var content2 = fs.readFileSync( __dirname + "/accessController.pdf");
console.log(content2);
console.log(content2.toJSON());
console.log(content2.toString());
 */
