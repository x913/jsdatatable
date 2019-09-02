const table = document.querySelector('#table');

Table.init(table, {
    header: [
        { name: 'Name', order: 'asc', searchEnabled: true, sortEnabled: true, defaultSort: true, editEnabled: true },
        { name: 'Gender', order: 'desc', sortEnabled: true },
        { name: 'Age', order: 'asc', sortEnabled: true, type: 'number' },
        { name: 'Balance', order: 'desc', sortEnabled: true, type: 'number' },
        { name: 'Company', order: 'asc', sortEnabled: true, searchEnabled: true },
        { name: 'Email', order: 'asc', sortEnabled: true, searchEnabled: true },
        { name: 'Phone', order: 'asc', sortEnabled: true, searchEnabled: true },
        { name: 'Address', searchEnabled: true, editEnabled: true },
    ],
    body: [
        {
            "name": "Payne Cherry",
            "gender": "male",
            "age": 32,
            "balance": 1224.4,
            "company": "AUTOGRATE",
            "email": "paynecherry@corecom.com",
            "phone": "+1 (833) 562-3812",
            "address": "432 Scholes Street, Elliott, Colorado, 4318"
        },
        {
            "name": "Christensen Cash",
            "gender": "male",
            "age": 20,
            "balance": 2878.02,
            "company": "EXPOSA",
            "email": "christensencash@exposa.com",
            "phone": "+1 (801) 436-2415",
            "address": "714 Commercial Street, Welda, Oklahoma, 8326"
        },
        {
            "name": "Sonja Lane",
            "gender": "female",
            "age": 23,
            "balance": 2942.29,
            "company": "EXPOSA",
            "email": "sonjalane@fleetmix.com",
            "phone": "+1 (878) 506-2992",
            "address": "770 Kiely Place, Dunbar, Missouri, 1515"
        },
        {
            "name": "Jocelyn Jimenez",
            "gender": "female",
            "age": 32,
            "balance": 3195.3,
            "company": "EXPOSA",
            "email": "jocelynjimenez@netility.com",
            "phone": "+1 (946) 473-2907",
            "address": "236 Whitwell Place, Retsof, Kansas, 8149"
        },
        {
            "name": "Lakeisha Small",
            "gender": "female",
            "age": 38,
            "balance": 2887.29,
            "company": "COMTOUR",
            "email": "lakeishasmall@comtour.com",
            "phone": "+1 (857) 586-3981",
            "address": "340 Luquer Street, Juarez, California, 2182"
        },
        {
            "name": "Joanne Norman",
            "gender": "female",
            "age": 23,
            "balance": 2046.37,
            "company": "COMTOUR",
            "email": "joannenorman@endipin.com",
            "phone": "+1 (918) 600-3719",
            "address": "392 Pershing Loop, Newry, Kentucky, 5587"
        },
        {
            "name": "Byrd Mckay",
            "gender": "male",
            "age": 23,
            "balance": 3003.52,
            "company": "AUTOGRATE",
            "email": "byrdmckay@autograte.com",
            "phone": "+1 (945) 526-3716",
            "address": "959 Lombardy Street, Efland, Louisiana, 8518"
        },
        {
            "name": "Winifred Ward",
            "gender": "female",
            "age": 20,
            "balance": 3745.72,
            "company": "AUTOGRATE",
            "email": "winifredward@pyramia.com",
            "phone": "+1 (907) 496-3293",
            "address": "718 Fillmore Place, Hamilton, Virginia, 8561"
        },

    ]
}, { itemsPerPage: 5, currentPage: 0, removeButton: true });
