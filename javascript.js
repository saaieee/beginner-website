

function name_validate(name) {
	if (name.length == 1){
		alert("Please enter a Name.");
return true;
	}
	else {return false;}
}


function email_validate(email) {
if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
return false;
else {
alert("Please enter a valid Email address.");
return true;}
}


function feedback_validate(name) {
	if (feedback.length == 1){
		alert("Oops! you have left the message box empty");
return true;
	}
	else {return false;}
}


function validateForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	if (name_validate(name) || email_validate(email) || birthday_validate()){
		return false; }
	else {return true;}
}
