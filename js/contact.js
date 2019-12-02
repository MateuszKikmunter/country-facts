const contact = function () {

    //private reusable contstant
    const mailTo = "siarhei.star@gmail.com";

    //attach event listener to email form
    const attachEvents = () => {
        document.getElementById("mail-form").addEventListener("submit", (e) => {
            //first prevent default form event (submit) so its not submitted
            e.preventDefault();
            //validate form using jQuery
            if ($("#mail-form").valid()) {
                //send email (i.e. open email client) if form is valid
                sendEmail();
            }
        });
    };

    //private method to create message content and open email client
    const sendEmail = () => {
        //get email body
        const body = document.getElementById("body").value;
        //get email cc
        const cc = document.getElementById("email").value;
        //create email subject
        const subject = `Hello from ${document.getElementById("name").value}`;
        //open email client using query string with parameters from above
        window.location.href = (`mailto:${mailTo}?subject=${subject}&body=${body}&cc=${cc}`);
    }

    //return public available methods
    return {
        attachEvents: attachEvents
    };
}();