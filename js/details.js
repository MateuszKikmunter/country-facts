const details = function () {

    // private reusable contstants
    const apiUrl = "https://restcountries.eu/rest/v2/name";
    const notFound = 404;

    //fetch country data from REST countries web api by name
    const fetchCountryDataByName = async (name) => {
        //if country name has value continue
        if (name) {
            //show loader
            utils.showLoader();
            //get country data from REST countries by name
            const response = await fetch(`${apiUrl}/${name}`);

            //prompt user when REST Countries api returned 404 not found
            if (response.status === notFound) {
                alert("Sorry, country nof found. Please try again!");
            }
            //otherwise parse data to JSON ond display particular subviews
            else {
                response.json().then(data => {
                    //country data is returned as an array even if we're looking for one country only - so we have to access it by index
                    const country = data[0];

                    //fetch particular templates, fill them with returned data and display
                    renderMustacheTemplate(country, "general-info", "general-info");
                    renderMustacheTemplate(country, "geographical-facts", "geographical-facts");
                    renderMustacheTemplate(country, "languages", "languages");
                    renderMustacheTemplate(country, "country-codes", "country-codes");
                });
            }
        }
        //finally hide loader
        utils.hideLoader();
    }

    //private method to fetch and display MustacheJS templates
    const renderMustacheTemplate = (country, templateName, targetId) => {
        //using AJAX and jQuery fetch particular MustacheJS template by its name
        $.get(`${templateName}.html`, (template) => {
            //get template container by its id
            const results = document.getElementById(targetId);
            //use MustacheJS to fill the template view with data and return HTML content
            const temp = Mustache.render(template, { country: country });
            //attach generated HTML to the template container
            results.innerHTML = (temp);
        });
    };

    //return public abailable methods
    return {
        fetchCountryDataByName: fetchCountryDataByName
    }
}();