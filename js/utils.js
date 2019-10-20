const utils = function () {

    const setFooterDate = () => {
        document.getElementById("copyright").insertAdjacentText("beforeend", ` ${new Date().getFullYear()}`);
    };

    return {
        setFooterDate: setFooterDate
    }
}();