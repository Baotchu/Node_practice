function course (coursename, tuition){
	this.Course = coursename;
	this.Tuition = tuition;
}
course.prototype.description = function(){
	console.log("welcome to GMU" + " " + this.Course + " " + this.Tuition);
}
var Viu = new course ("Database II", 2160);
Viu.description();
