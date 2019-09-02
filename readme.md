> Simple Table

Very simple table written with vanilla javascript with filtering, pagination, sorting and cells editing.

> How to use

Include simple-table.js in your HTML sources like this:

```javascript
<script src="../src/simple-table.js"></script>
```

and place HTML template for table like this (see example folder for details):

```HTML
    <div class="container">
      <div class="row">
        <div class="col s4">
          <input type="text" id="table-search" placeholder="Search" />
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <table id="table">
            <thead style="cursor: pointer"></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
          <button class="btn" id="table-last-page" disabled>Last Page</button>
          <button class="btn" id="table-next-page">Next Page</button>
        </div>
      </div>
    </div>
```

After that you can initalize table as in example:

```javascript
const table = document.querySelector("#table");

Table.init(
  table,
  {
    header: [
      {
        name: "Name",
        order: "asc",
        searchEnabled: true,
        sortEnabled: true,
        defaultSort: true,
        editEnabled: true
      },
      { name: "Gender", order: "desc", sortEnabled: true },
      { name: "Age", order: "asc", sortEnabled: true, type: "number" },
      { name: "Balance", order: "desc", sortEnabled: true, type: "number" },
      { name: "Company", order: "asc", sortEnabled: true, searchEnabled: true },
      { name: "Email", order: "asc", sortEnabled: true, searchEnabled: true },
      { name: "Phone", order: "asc", sortEnabled: true, searchEnabled: true },
      {
        name: "Address",
        order: "asc",
        sortEnabled: true,
        searchEnabled: true,
        editEnabled: true
      }
    ],
    body: [
      {
        name: "Christensen Cash",
        gender: "male",
        age: 20,
        balance: 2878.02,
        company: "EXPOSA",
        email: "christensencash@exposa.com",
        phone: "+1 (801) 436-2415",
        address: "714 Commercial Street, Welda, Oklahoma, 8326"
      },
      {
        name: "Sonja Lane",
        gender: "female",
        age: 23,
        balance: 2942.29,
        company: "EXPOSA",
        email: "sonjalane@fleetmix.com",
        phone: "+1 (878) 506-2992",
        address: "770 Kiely Place, Dunbar, Missouri, 1515"
      }
    ]
  },
  { itemsPerPage: 5, currentPage: 0 }
);
```

You need to provide header with array of header-objects which shoud have a name and may have following properties:

- order: string value with "asc or desc" - default sorting order, i.e. order: "asc"
- sortEnabled: boolean value with true or false you can disable or enable sorting on certain columns
- searchEnabled: boolean value you can enable or disable searching with filter box with this propery
- editEnabled: you can enable builtin editor for cell by setting editEnabled to true
- itemsPerPage: elements on page to display
- removeButton: boolean value - append "remove" button to each row of the table

And also you need to provide a body. Body is a simple array with objects, each object is a table row.
