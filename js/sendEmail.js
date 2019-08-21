function sendMail(contactForm) {
    var service_id = "default_service";
	var template_id = "contact_me";
    emailjs.sendForm("default_service", "contact_me", "#enquiryForm", {
        "first_name": contactForm.first_name.value,
        "last_name": contactForm.last_name.value,
        "from_email": contactForm.email_address.value,
        "enquiry": contactForm.enquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}