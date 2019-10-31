const details = function () {

    const apiUrl = "https://restcountries.eu/rest/v2/name";
    const notFound = 404;

    const fetchCountryDataByName = async (name) => {
        if (name) {
            utils.showLoader();
            const response = await fetch(`${apiUrl}/${name}`);

            if (response.status === notFound) {
                alert("Sorry, country nof found. Please try again!");
            }
            else {
                response.json().then(data => {
                    const country = data[0];

                    renderMustacheTemplate(country, "general-info", "general-info");
                    renderMustacheTemplate(country, "geographical-facts", "geographical-facts");
                    renderMustacheTemplate(country, "languages", "languages");
                    renderMustacheTemplate(country, "country-codes", "country-codes");
                });
            }
        }
        utils.hideLoader();
    }

    const renderMustacheTemplate = (country, templateName, targetId) => {
        $.get(`${templateName}.html`, (template) => {
            const results = document.getElementById(targetId);
            const temp = Mustache.render(template, { country: country });
            results.innerHTML = (temp);
        });
    };

    return {
        fetchCountryDataByName: fetchCountryDataByName
    }
}();