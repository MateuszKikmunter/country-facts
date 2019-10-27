const quickSearch = function () {

    const apiUrl = "https://restcountries.eu/rest/v2/name";
    const enterKeyCode = 13;
    const notFound = 404;

    const fetchCountryDataByName = async () => {
        const countryName = document.getElementById("search-country-input").value;
        if (countryName) {
            utils.showLoader();
            const response = await fetch(`${apiUrl}/${countryName}`);

            if (response.status === notFound) {
                alert("Sorry, country nof found. Please try again!");
            }
            else {
                response.json().then(data => {
                    $.get("quick-search-result.html", (template) => {
                        const results = document.getElementById("results");
                        const temp = Mustache.render(template, { countries: data });
                        results.innerHTML = (temp);
                    });
                });
            }
        }
        else {
            alert("Please enter country name.");
        }
        utils.hideLoader();
    }

    const attachEvents = () => {
        document.getElementById("search-button").addEventListener("click", async () => {
            await fetchCountryDataByName();
        });

        document.getElementById("search-country-input").addEventListener("keydown", async (event) => {
            if (event.keyCode === enterKeyCode) {
                await fetchCountryDataByName();
            }
        });
    };

    return {
        attachEvents: attachEvents
    };
}();