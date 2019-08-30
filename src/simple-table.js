const UIController = (function () {
    const UISelectors = {
        searchBox: document.getElementById('table-search') ? document.getElementById('table-search') : undefined,
        lastButton: document.getElementById('table-last-page') ? document.getElementById('table-last-page') : undefined,
        nextButton: document.getElementById('table-next-page') ? document.getElementById('table-next-page') : undefined,
        table: null
    }

    function render(data) {
        const thead = UISelectors.table.querySelector('thead');
        while (thead.firstChild)
            thead.removeChild(thead.firstChild);
        thead.innerHtml = '';
        // render header
        for (let i = 0; i < data.header.length; i++) {
            const item = data.header[i];
            const th = document.createElement('th');
            th.setAttribute(`data-column-number`, i);
            th.setAttribute(`data-sort-order`, item.order ? item.order : 'asc');
            th.setAttribute(`data-sort-enabled`, item.sortEnabled ? item.sortEnabled : false);
            th.setAttribute(`data-edit-enabled`, item.editEnabled ? item.editEnabled : false);
            th.textContent = item.name;
            thead.appendChild(th);
        }

        // render body
        const tbody = UISelectors.table.querySelector('tbody');
        while (tbody.firstChild)
            tbody.removeChild(tbody.firstChild);
        tbody.innerHtml = '';

        for (let i = 0; i < data.body.length; i++) {
            const tr = document.createElement('tr');
            const keys = Object.keys(data.body[i]);
            const values = Object.values(data.body[i]);
            for (let j = 0; j < values.length; j++) {
                const td = document.createElement('td');
                td.setAttribute('data-row', i);
                td.setAttribute('data-col', j);
                td.setAttribute('data-name', keys[j]);
                td.textContent = values[j];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

    }

    function init(table) {
        UISelectors.table = table;
    }

    return {
        getSelectors: function () {
            return UISelectors;
        },
        disableLastBtn: function () {
            if (UISelectors.lastButton)
                UISelectors.lastButton.setAttribute('disabled', true);
        },
        enableLastBtn: function () {
            if (UISelectors.lastButton)
                UISelectors.lastButton.removeAttribute('disabled');
        },
        disableNextBtn: function () {
            if (UISelectors.nextButton)
                UISelectors.nextButton.setAttribute('disabled', true);
        },
        enableNextBtn: function () {
            if (UISelectors.nextButton)
                UISelectors.nextButton.removeAttribute('disabled');
        },
        getTableHeader: function () {
            return UISelectors.table.querySelector('thead');
        },
        getTableBody: function () {
            return UISelectors.table.querySelector('tbody');
        },
        // if user cancel editing with ENTER - set new value if with ESC - restore old value
        cancelAllEditors: function (newValue = undefined) {
            Array.from(document.getElementsByClassName('for-removal')).forEach(e => {
                const { oldValue } = e.dataset;
                e.classList.remove('for-removal');
                e.innerHTML = '';
                if (newValue) {
                    e.textContent = newValue;
                } else
                    e.textContent = oldValue;
            });
        },
        attachInput: function (e) {
            const { row, col } = e.target.dataset;
            const newElement = document.createElement('input');
            newElement.type = 'text';
            newElement.style = 'width: 150px';
            newElement.setAttribute('data-content', `${row}-${col}`);
            newElement.value = e.target.textContent;
            e.target.classList.add('for-removal');
            e.target.insertAdjacentElement('beforeend', newElement);
            newElement.focus();
            return newElement;
        },
        init: init,
        render: render
    }

})();

const Table = (function (UIController) {

    const state = {
        dataOriginal: {},
        data: {},
        options: {}
    };

    const UISelectors = UIController.getSelectors();

    function paginateData(data) {
        return data.slice(state.options.currentPage * state.options.itemsPerPage, state.options.currentPage * state.options.itemsPerPage + state.options.itemsPerPage);
    }

    function sortData(columnNumber, sortOrder) {

        let data;
        if (state.options.searchBy && state.options.searchBy.length > 0) {
            data = { ...state.data };
        } else {
            data = { ...state.dataOriginal };
        }

        const columnToSortBy = Object.keys(data.body[0])[columnNumber];
        const columnDataType = data.header[columnNumber].type ? data.header[columnNumber].type : 'string';


        if (columnDataType === 'number') {
            data.body.sort((a, b) => {
                if (data.header[columnNumber].order === 'asc') {
                    return a[columnToSortBy] - b[columnToSortBy];
                }
                if (data.header[columnNumber].order === 'desc') {
                    return b[columnToSortBy] - a[columnToSortBy];
                }
            })
        } else {
            if (data.header[columnNumber].order === 'asc') {
                data.body.sort((a, b) => {
                    return a[columnToSortBy].localeCompare(b[columnToSortBy]);
                });
            }
            if (data.header[columnNumber].order === 'desc') {
                data.body.sort((a, b) => {
                    return b[columnToSortBy].localeCompare(a[columnToSortBy]);
                });
            }
        }

        data.header[columnNumber].order = sortOrder === 'asc' ? 'desc' : 'asc';
        return data;
    }

    function onTableSort(e) {
        const { columnNumber, sortOrder, sortEnabled } = e.target.dataset;
        if (sortEnabled !== 'true')
            return;
        state.data = sortData(columnNumber, sortOrder);
        state.data.body = paginateData(state.data.body);
        UIController.render(state.data);
    }

    function onNextButton() {
        state.options.currentPage += 1;

        if (state.options.currentPage > 0)
            UIController.enableLastBtn();
        state.data.body = paginateData(state.dataOriginal.body);
        const startOffset = (state.options.currentPage + 1) * state.options.itemsPerPage;
        const nextPage = state.dataOriginal.body.slice(startOffset, startOffset + state.options.itemsPerPage);
        if (nextPage.length === 0)
            UIController.disableNextBtn();
        UIController.render(state.data);
    }

    function onLastButton() {
        state.options.currentPage -= 1;
        if (state.options.currentPage <= 0)
            UIController.disableLastBtn();

        UIController.enableNextBtn();
        state.data.body = paginateData(state.dataOriginal.body);
        UIController.render(state.data);
    }

    function onCellClick(e) {
        const { row, col } = e.target.dataset;

        if (e.target.tagName === 'INPUT')
            return;

        const isEditEnabled = state.data.header[col].editEnabled ? state.data.header[col].editEnabled : false;
        if (!isEditEnabled)
            return;
        console.log(row, col, isEditEnabled);
        e.target.setAttribute('data-old-value', e.target.textContent);
        e.target.textContent = '';
        UIController.cancelAllEditors();
        const el = UIController.attachInput(e);
        el.addEventListener('keyup', (e) => {
            const { row, col, name } = e.target.parentElement.dataset;
            if (e.keyCode === 13) {
                console.log('save changes and close', e.target.value, row, col, name);
                state.dataOriginal.body[row][name] = e.target.value;
            }
            if (e.keyCode === 13 || e.keyCode === 27) {
                UIController.cancelAllEditors(e.target.value);
            }
        });
    }

    function onSearch(e) {
        state.options.searchBy = e.target.value;
        if (e.keyCode === 13 && e.target.value.length > 0) {
            console.log('searching...');
            state.options.currentPage = 0;
            // filter data for search box and render
            const searchResults = [];
            for (let i = 0; i < state.dataOriginal.body.length; i++) {
                const currentObject = { ...state.dataOriginal.body[i] };
                const foundIdx = Object.values(currentObject).findIndex(x => x.toString().toLowerCase().indexOf(state.options.searchBy.toLowerCase()) !== -1);
                if (foundIdx === -1) {
                    continue;
                }
                const isSearchEnabled = state.dataOriginal.header[foundIdx].searchEnabled ? state.dataOriginal.header[foundIdx].searchEnabled : false;
                if (isSearchEnabled)
                    searchResults.push(currentObject);
            }
            if (searchResults) {
                state.data.body = searchResults;
                UIController.render(state.data);
            }

            UIController.disableLastBtn();

            const startOffset = (state.options.currentPage + 1) * state.options.itemsPerPage;
            const nextPage = state.data.body.slice(startOffset, startOffset + state.options.itemsPerPage);
            if (nextPage.length === 0)
                UIController.disableNextBtn();

        } else if (e.target.value.length === 0) {
            state.options.currentPage = 0;
            state.data.body = [...state.dataOriginal.body];
            state.data.body = paginateData(state.data.body);
            UIController.render(state.data);
        }
    }

    function init(table, data, options) {
        if (!data.header) {
            console.log('Error: You need to provide data header');
            return;
        }

        if (!data.body) {
            console.log('Error: You need to provide data body');
            return;
        }


        UIController.init(table);
        state.dataOriginal = { ...data };
        state.data = { ...data };
        state.options = { ...options };

        for (let i = 0; i < state.data.header.length; i++) {
            if (state.data.header[i].defaultSort && state.data.header[i].defaultSort === true) {
                state.data = sortData(i, state.data.header[i].order);
                break;
            }
        }

        state.data.body = paginateData(state.data.body);
        UIController.render(state.data);
        UIController.getTableHeader().addEventListener('click', onTableSort);
        UIController.getTableBody().addEventListener('click', onCellClick);
        UISelectors.nextButton.addEventListener('click', onNextButton);
        UISelectors.lastButton.addEventListener('click', onLastButton);
        UISelectors.searchBox.addEventListener('keyup', onSearch);
    }

    return {
        init: init
    }

})(UIController);