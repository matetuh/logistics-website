function sendEmail() {
    //inputs 
    var from = document.getElementsByClassName("form-email")[0].value; 
    var subject = document.getElementsByClassName("form-header")[0].value; 
    var body = "OSOBA: " + document.getElementsByClassName("form-person")[0].value + "<br/>" + "<br/>" +
                "START: " + document.getElementsByClassName("form-start")[0].value  + "<br/>" +
                "CEL: " + document.getElementsByClassName("form-aim")[0].value  + "<br/>" + "<br/>" +
                "WIADOMOŚĆ: " + document.getElementsByClassName("form-body")[0].value  + "<br/>"; 

	Email.send({
    SecureToken : "1924a4dc-6676-4f71-b6d1-7d969359ea17",
	To : 'matetuh@gmail.com',
	From : from,
	Subject : subject,
	Body : body,
	}).then(
		message => alert("mail sent successfully")
	);
}