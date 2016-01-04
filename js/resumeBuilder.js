/*
ty on purpose! Your code to build the resume will go here
*/

var bio = {
	"name" : "Swati",
	"role"  :  "Web developer" ,
	"contact" : {
	  "mobile" : "408-678-567",
	  "email"   : "swati.tattoo@gmail.com",
	   "github"  : "stattoo",
	   "location" : "San Francisco CA"

	},

	"welcomeMessage": "I am Swati , excited to start a career",
	"skills": [ "awesomeness", "delivering", "cryogrnic sleep", "fun"],
	"bioPic": "images/abc.jpg"



}

var education = {
	"schools": [
	{
		"name": "Pune University",
		"location":  "Pune INDIA",
		"degree":  "Masters",
		"majors" :  ["CS"],
		"dates":   2007


	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Crash Course",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com/course/ud804"

	}
	]
}

var work = {
	"jobs": [

	{
		 "employer": "Avenidas Early lieracy",
		 "title": "Tutor",
		 "dates": "May-2008",
		 "location" : "Palo Alto CA",
		 "description": "Tutor two Children in 1st and 2nd grade at school in MounatinView and help improve thier reading skills"
	},
	{
		"employer": "City College",
		"title": "Teaching Assistant",
		"dates" : "August- 2007 to December - 2007",
		"location"  : "Gwalior INDIA",
		"description": "Taught undergraduates and graduates students the fundamentals of Operating systems and Mathematics. CTeaching , Tutoring and Counselling, Creative Student engagement,Excellent class room management, Strong listener,Motivating Students, Interactive teaching/learning, Effectively working with Parents,Maintained safe & positive learning enviornment, Observed Students performance and documented both positive and negative points, Developed administered and corrected tests and quizzes in a timely manner."


	}
	]
}
var projects = {
	"projects": [
	{
		"title": "Municipal Kisosk",
		"dates" : "2007",
		"description" : "Municipal Kiosk allows us to do online complaints of municipality related problems through email or sms .It gives you the power to integrate information, visualize scenarios, soclve municipality related problems, present powerful ideas and develop solutions like never before. Municipal Kiosk is a tool used by center and state government to solve the problems of citizens. Realizing the need for enchancing customer care the demand of time and in order to improve the urban infrastructure there is strong recommmendation for Municipal Kiosks.The main objectives of Municiapl Kiosk are as stated Prompt response, Work is done in short duration, Direct involvement of Higher Officers, leads to structured and powerful economy, reduces the burden of common man.",

		"images" : ["images/kiosk1.jpg" , "images/interactive-kiosk.jpg"]


	}

	]

}

bio.display = function(){

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedemail  = HTMLemail.replace("%data%",bio.contact.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPic  =  HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

$("#header").append([formattedPic]);





$("#header").append([formattedWelcomeMsg]);



$("#topContacts").prepend([formattedemail]);
$("#topContacts").prepend([formattedgithub]);
$("#topContacts").prepend([formattedmobile]);
$("#topContacts").append([formattedlocation]);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
     $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);


}

$("#footerContacts").append([formattedemail]);
$("#footerContacts").append([formattedgithub]);
$("#footerContacts").append([formattedmobile]);
$("#footerContacts").append([formattedlocation]);









}


bio.display();


function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);


	$(".work-entry:last").append(formattedEmployerTitle);


     $(".work-entry:last").append(formattedDates);

     	$(".work-entry:last").append(formattedLocation);
     	$(".work-entry:last").append(formattedDescription);


}
}

displayWork();




projects.display = function() {

for (project in projects.projects) {

	$("#projects").append(HTMLprojectStart);
   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
   var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if ( projects.projects[project].images.length > 0 ) {

			 var formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
			 $(".project-entry:last").append(formattedprojImage);
			 formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
			 $(".project-entry:last").append(formattedprojImage);


	}




}
}


projects.display();


education.display = function(){
	for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	   	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
	    var formattedDates  = HTMLschoolDates.replace("%data%",education.schools[school].dates);

		$(".education-entry:last").append(formattedName);
	    $(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajors)

	}


	$("#education").append(HTMLonlineClasses);

	for (onlineCourse in  education.onlineCourses)
	{
	 	$("#education").append(HTMLschoolStart);
	    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
	    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
	    var formattedURL = HTMLonlineURL.replace("%data",education.onlineCourses[onlineCourse].url);
	    $(".education-entry:last").append(formattedTitle);
	    $(".education-entry:last").append(formattedSchool);
	    $(".education-entry:last").append(formattedDates);
	    $(".education-entry:last").append(formattedURL);
	}

}

education.display();


$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


$("#mapDiv").append(googleMap);