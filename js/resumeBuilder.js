

// objects

var bio = {
	"name": "Alexander Spanos",
	"role": "Web Developer",
	"contacts": {
		"mobile": "6997878788",
		"email": "alexisspa9@gmail.com",
		"github": "alexisspa9",
		"location": "Greece"
	},
	"welcomeMessage": "Hello I am Alexander a professional web developer",
	"skills": ["HTML, CSS, JAVASCRIPT, JQUERY, PHP, WORDPRESS"],
	"biopic": "images/me.jpg",
	"display": ""
	
};

var education = {
	"schools":[
	{
		"name": "SAE",
		"location": "Athens, Greece",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": "2015",
		"url": "http://www.sae.gr"
	}],
	"onlineCourses": [{
		"title": "Front End Web Developer NanoDegree",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	"display": ""
};

var work = {
				"jobs": [
				{
					"employer": "Fos Batsouri Katerina",
					"title": "Seller",
					"location": "Paros, Greece",
					"dates":"2014",
					"description": "Working as a seller for 1 year"
				}
				],
				"display": ""
};

var projects = {
	"projects": [
	{
		"title": "Olive tree cosmetics",
		"dates": "2016",
		"description": "olive tree cosmetics is an e-shop site selling olive oil products",
		"images": ["images/olive.jpg"]
	},
	{
		"title": "Paros Pages",
		"dates": "2017",
		"description": "Paros Pages is a bussiness catalog site",
		"images": ["images/parospages.jpg"]
	}
	],
	"display": ""
};


//     functions

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(formattedPic);
	$("#header").prepend(formattedMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var idStrings = ["#topContacts", "#footerContacts"];
	for (var i = 0; i < idStrings.length; i++) {
		id = idStrings[i];
		$(id).append(formattedMobile);
		$(id).append(formattedEmail);
		$(id).append(formattedGithub);
		$(id).append(formattedLocation);
	}

	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
		projects.projects.forEach (function (project) {

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);

		for (var i = 0; i < project.images.length; i++) {
		var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
		$(".project-entry:last").append(formattedImage);
	}

	});

	};

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
				work.jobs.forEach (function(job) {

				var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", job.dates);
				$(".work-entry:last").append(formattedDates);

				var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
				$(".work-entry:last").append(formattedWorkLocation);

				var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
				$(".work-entry:last").append(formattedDescription);
			});
	};

education.display = function() {


	$("#education").append(HTMLschoolStart);
	education.schools.forEach(function(school){
      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedSchoolLocation);
		for (var i = 0; i < school.majors.length; i++) {
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
		$(".education-entry:last").append(formattedSchoolMajor);
	};
		
    });

	$(".education-entry:last").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(onlineSchool) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool.school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineSchool.url);
		$(".education-entry:last").append(formattedOnlineURL);
	});
};

// call functions
bio.display();
work.display();
projects.display();
education.display ();

//map

$("#mapDiv").append(googleMap);
