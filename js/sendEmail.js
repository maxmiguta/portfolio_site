emailjs.init("user_qJBP2xc5mt95iQW1Rq1zm");

const form = document.querySelector('form');
form.onsubmit = (event) => sendMail(event);

const sendMail = async (event) => {
    event.preventDefault();
    const mail = await emailjs.sendForm(
        'default_service',
        'contact_me',
        event.target,
        "user_qJBP2xc5mt95iQW1Rq1zm"
    );
	console.log(mail)
	event.target.reset()
	if (mail.status = 200) alert("Form submitted successfully.");
	else alert("There was an error with the form.")
};