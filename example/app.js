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
            "name": "Burton Carney",
            "gender": "male",
            "age": 23,
            "balance": 2226.48,
            "company": "LIQUICOM",
            "email": "burtoncarney@liquicom.com",
            "phone": "+1 (941) 599-3496",
            "address": "531 Norfolk Street, Vicksburg, Alaska, 5692"
        },
        {
            "name": "Salinas Wall",
            "gender": "male",
            "age": 25,
            "balance": 3187.22,
            "company": "LIQUICOM",
            "email": "salinaswall@atgen.com",
            "phone": "+1 (843) 455-3086",
            "address": "772 Tehama Street, Allison, Florida, 3448"
        },
        {
            "name": "Roach Buckley",
            "gender": "male",
            "age": 27,
            "balance": 3501.73,
            "company": "LIQUICOM",
            "email": "roachbuckley@emergent.com",
            "phone": "+1 (949) 418-3742",
            "address": "236 Meserole Street, Fillmore, West Virginia, 910"
        },
        {
            "name": "Angelique Blankenship",
            "gender": "female",
            "age": 27,
            "balance": 3489.01,
            "company": "PHEAST",
            "email": "angeliqueblankenship@pheast.com",
            "phone": "+1 (907) 548-3086",
            "address": "288 Clove Road, Lutsen, Montana, 7296"
        },
        {
            "name": "Ida Randall",
            "gender": "female",
            "age": 26,
            "balance": 2829.08,
            "company": "PHEAST",
            "email": "idarandall@halap.com",
            "phone": "+1 (942) 427-3970",
            "address": "950 Balfour Place, Valle, New Hampshire, 8891"
        },
        {
            "name": "Wendy Welch",
            "gender": "female",
            "age": 21,
            "balance": 1691.09,
            "company": "PHEAST",
            "email": "wendywelch@zboo.com",
            "phone": "+1 (889) 585-2193",
            "address": "476 Oceanview Avenue, Rowe, District Of Columbia, 3524"
        },
        {
            "name": "Gertrude Maldonado",
            "gender": "female",
            "age": 23,
            "balance": 1632.54,
            "company": "PHEAST",
            "email": "gertrudemaldonado@earthpure.com",
            "phone": "+1 (876) 547-2811",
            "address": "938 Moffat Street, Watrous, Palau, 1777"
        },
        {
            "name": "Mckenzie Le",
            "gender": "male",
            "age": 21,
            "balance": 1179.81,
            "company": "AQUAZURE",
            "email": "mckenziele@aquazure.com",
            "phone": "+1 (829) 513-3965",
            "address": "476 Moore Place, Fairview, Texas, 199"
        },
        {
            "name": "Wheeler Holmes",
            "gender": "male",
            "age": 36,
            "balance": 1559.45,
            "company": "VIAGREAT",
            "email": "wheelerholmes@viagreat.com",
            "phone": "+1 (844) 514-2632",
            "address": "704 Knapp Street, Fresno, Minnesota, 7689"
        },
        {
            "name": "Harris Jacobs",
            "gender": "male",
            "age": 39,
            "balance": 1673.56,
            "company": "ROCKABYE",
            "email": "harrisjacobs@rockabye.com",
            "phone": "+1 (906) 434-3218",
            "address": "908 Gallatin Place, Wright, Vermont, 8639"
        },
        {
            "name": "Kerry Erickson",
            "gender": "female",
            "age": 32,
            "balance": 2012.35,
            "company": "BITENDREX",
            "email": "kerryerickson@bitendrex.com",
            "phone": "+1 (837) 497-2210",
            "address": "854 Thomas Street, Basye, American Samoa, 1278"
        },
        {
            "name": "Kristen Flowers",
            "gender": "female",
            "age": 26,
            "balance": 2369.59,
            "company": "MAZUDA",
            "email": "kristenflowers@mazuda.com",
            "phone": "+1 (894) 408-3036",
            "address": "480 Milford Street, Edmund, Ohio, 1779"
        },
        {
            "name": "Denise Hawkins",
            "gender": "female",
            "age": 38,
            "balance": 3340.34,
            "company": "OCTOCORE",
            "email": "denisehawkins@octocore.com",
            "phone": "+1 (995) 585-2753",
            "address": "957 Victor Road, Robbins, South Carolina, 1004"
        },
        {
            "name": "Robinson Reese",
            "gender": "male",
            "age": 37,
            "balance": 2323.91,
            "company": "TETAK",
            "email": "robinsonreese@tetak.com",
            "phone": "+1 (983) 457-2156",
            "address": "363 Linden Street, Kipp, Massachusetts, 4305"
        },
        {
            "name": "Mildred Pitts",
            "gender": "female",
            "age": 32,
            "balance": 3565.32,
            "company": "XYLAR",
            "email": "mildredpitts@xylar.com",
            "phone": "+1 (975) 545-2078",
            "address": "922 Kane Street, Maplewood, Utah, 9304"
        },
        {
            "name": "Leach Daniel",
            "gender": "male",
            "age": 25,
            "balance": 1804.35,
            "company": "MUSANPOLY",
            "email": "leachdaniel@musanpoly.com",
            "phone": "+1 (940) 479-2789",
            "address": "548 Cherry Street, Urbana, Nebraska, 2151"
        },
        {
            "name": "Booker Rutledge",
            "gender": "male",
            "age": 28,
            "balance": 3908.98,
            "company": "ZIPAK",
            "email": "bookerrutledge@zipak.com",
            "phone": "+1 (859) 421-3513",
            "address": "603 Douglass Street, Darbydale, Iowa, 4546"
        },
        {
            "name": "Tasha Gonzales",
            "gender": "female",
            "age": 26,
            "balance": 3053.19,
            "company": "LUDAK",
            "email": "tashagonzales@ludak.com",
            "phone": "+1 (968) 473-3289",
            "address": "479 Channel Avenue, Bowden, South Dakota, 505"
        },
        {
            "name": "Polly Horn",
            "gender": "female",
            "age": 29,
            "balance": 3313.3,
            "company": "SILODYNE",
            "email": "pollyhorn@silodyne.com",
            "phone": "+1 (877) 552-3458",
            "address": "441 Ruby Street, Bodega, Federated States Of Micronesia, 1851"
        },
        {
            "name": "Faye Curtis",
            "gender": "female",
            "age": 32,
            "balance": 3899.8,
            "company": "VENOFLEX",
            "email": "fayecurtis@venoflex.com",
            "phone": "+1 (904) 572-3447",
            "address": "606 Manhattan Avenue, Wakarusa, Rhode Island, 5933"
        },
        {
            "name": "Alma Dominguez",
            "gender": "female",
            "age": 24,
            "balance": 2607.43,
            "company": "EVEREST",
            "email": "almadominguez@everest.com",
            "phone": "+1 (911) 571-2221",
            "address": "945 Havemeyer Street, Belfair, Marshall Islands, 6414"
        },
        {
            "name": "Wilcox Clark",
            "gender": "male",
            "age": 26,
            "balance": 3323.21,
            "company": "ISOSTREAM",
            "email": "wilcoxclark@isostream.com",
            "phone": "+1 (905) 423-2335",
            "address": "507 Hooper Street, Leroy, Idaho, 2825"
        },
        {
            "name": "Marisa Wilkins",
            "gender": "female",
            "age": 38,
            "balance": 1766.46,
            "company": "FIREWAX",
            "email": "marisawilkins@firewax.com",
            "phone": "+1 (908) 554-3043",
            "address": "421 Sunnyside Court, Indio, Maryland, 5306"
        }
    ]
}, { itemsPerPage: 5, currentPage: 0 });
