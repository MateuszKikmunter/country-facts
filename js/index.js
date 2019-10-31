const index = function () {

    const apiUrl = "https://restcountries.eu/rest/v2/all";
    const initializeTable = () => {
        $("#countries-table").DataTable({
            processing: true,
            ajax: {
                url: apiUrl,
                type: "GET",
                dataType: "json",
                dataSrc: ""
            },
            rowId: "name",
            columns: [
                { data: "flag" },
                { data: "name" },
                { data: "area" },
                { data: "population" },
                { data: "capital" },
                { data: "region" }
            ],
            columnDefs: [
                {
                    targets: 0,
                    searchable: false,
                    orderable: false,
                    render: (data, type, row) => {
                        return `<img class="width-50" src="${row.flag}" alt="Flag of ${row.name}" >`;
                    }
                },
                {
                    targets: 2,
                    searchable: false
                },
                {
                    targets: 3,
                    searchable: false
                },
                {
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

    return {
        initializeTable: initializeTable
    };
}();