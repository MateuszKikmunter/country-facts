const utils = function () {

    //private reusable constants
    const loaderVisible = "loader-visible";
    const loaderHidden = "loader-hidden";

    //get footer and set its date to current year
    const setFooterDate = () => {
        document.getElementById("copyright").insertAdjacentText("beforeend", ` ${new Date().getFullYear()}`);
    };

    //get loader
    const getLoader = () => {
        return document.getElementsByClassName("loader")[0];
    }

    //get and show loader
    const showLoader = () => {
        const loader = getLoader();
        loader.classList.remove(loaderHidden);
        loader.classList.add(loaderVisible);
    }

    //get and hide loader
    const hideLoader = () => {
        const loader = getLoader();
        loader.classList.remove(loaderVisible);
        loader.classList.add(loaderHidden);
    };

    //return public available methods
    return {
        setFooterDate: setFooterDate,
        showLoader: showLoader,
        hideLoader: hideLoader
    }
}();