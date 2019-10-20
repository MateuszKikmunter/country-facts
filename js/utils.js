const utils = function () {

    const loaderVisible = "loader-visible";
    const loaderHidden = "loader-hidden";

    const setFooterDate = () => {
        document.getElementById("copyright").insertAdjacentText("beforeend", ` ${new Date().getFullYear()}`);
    };

    const getLoader = () => {
        return document.getElementsByClassName("loader")[0];
    }

    const showLoader = () => {
        const loader = getLoader();
        loader.classList.remove(loaderHidden);
        loader.classList.add(loaderVisible);
    }

    const hideLoader = () => {
        const loader = getLoader();
        loader.classList.remove(loaderVisible);
        loader.classList.add(loaderHidden);
    };

    return {
        setFooterDate: setFooterDate,
        showLoader: showLoader,
        hideLoader: hideLoader
    }
}();