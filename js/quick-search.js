const quickSearch = function () {

    //private reusable constants
    const apiUrl = "https://restcountries.eu/rest/v2/name";
    const enterKeyCode = 13;
    const notFound = 404;

    /*
        private method to fetch countries data from REST Countries web api
        returns more than one country if country name contains provided input
    */
    const fetchCountryDataByName = async () => {
        //get input value
        const countryName = document.getElementById("search-country-input").value;
        //continue if input has value
        if (countryName) {
            //show loader while loading data
            utils.showLoader();

            //fetch data from REST countries web api using JS native fetch method
            const response = await fetch(`${apiUrl}/${countryName}`);

            //prompt user if web api returned 404 not found
            if (response.status === notFound) {
                alert("Sorry, country nof found. Please try again!");
            }
            //otherwise parse response to JSON and display the results
            else {
                response.json().then(data => {
                    //get search results partial view using AJAX (jQuery GET)
                    $.get("quick-search-result.html", (template) => {
                        //get view container which will be filled with returned data
                        const results = document.getElementById("results");
                        //use MustacheJS to fill the template view with data and return HTML content
                        const temp = Mustache.render(template, { countries: data });
                        //attach generated HTML to the view container
                        results.innerHTML = (temp);
                    });
                });
            }
        }
        //prompt user to enter country name if input is empty
        else {
            alert("Please enter country name.");
        }
        //finally hide loader using method provided by utilities
        utils.hideLoader();
    }

    //attach event listeners and methods to particular elements
    const attachEvents = () => {
        //attach click event listener to search-button
        document.getElementById("search-button").addEventListener("click", async () => {
            //fetch countries data on search-button click
            await fetchCountryDataByName();
        });

        //attach keydown event listener to search-country-input
        document.getElementById("search-country-input").addEventListener("keydown", async (event) => {
            //fetch countries data when Enter key is pressed
            if (event.keyCode === enterKeyCode) {
                await fetchCountryDataByName();
            }
        });
    };

    //return public available methods
    return {
        attachEvents: attachEvents
    };
}();