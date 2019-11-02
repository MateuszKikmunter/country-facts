const contact = function () {

    const mailTo = "siarhei.star@gmail.com";

    const attachEvents = () => {
        document.getElementById("submit-btn").addEventListener("click", (e) => {
            e.preventDefault();
            sendEmail();
        });
    };

    const sendEmail = () => {
        const body = document.getElementById("body").value;
        const cc = document.getElementById("email").value;
        const subject = `Hello from ${document.getElementById("name").value}`;
        window.location.href = (`mailto:${mailTo}?subject=${subject}&body=${body}&cc=${cc}`);
    }

    return {
        attachEvents: attachEvents
    };
}();