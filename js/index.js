const index = function () {

    //private reusable constant
    const apiUrl = "https://restcountries.eu/rest/v2/all";

    // use jQuery Datatables api to generate table filled with countries data
    const initializeTable = () => {
        $("#countries-table").DataTable({
            //show processing message when fetching data
            processing: true,
            //use AJAX to fetch data
            ajax: {
                url: apiUrl,
                type: "GET",
                dataType: "json",
                dataSrc: ""
            },
            //set table row id to country name
            rowId: "name",
            //configure table columns
            columns: [
                { data: "flag" },
                { data: "name" },
                { data: "area" },
                { data: "population" },
                { data: "capital" },
                { data: "region" }
            ],
            //additional logic for particular columns
            columnDefs: [
                {
                    //configure and display country flag
                    targets: 0,
                    searchable: false,
                    orderable: false,
                    render: (data, type, row) => {
                        return `<img class="width-50" src="${row.flag}" alt="Flag of ${row.name}" >`;
                    }
                },
                {
                    //configure population as not searchable
                    targets: 2,
                    searchable: false
                },
                {
                    //configure area as not searchable
                    targets: 3,
                    searchable: false
                },
                {
                    //configure and generate anchor tag pointing to country details page
                    targets: 6,
                    searchable: false,
                    orderable: false,
                    render: (data, type, row) => {
                        return `<a href="./details.html?name=${row.name}"><i class="fa fa-info-circle" aria-hidden="true"></i> Learn more</a>`;
                    }
                }
            ]
        });
    };

    //return public available methods
    return {
        initializeTable: initializeTable
    };
}();