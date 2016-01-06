import React from 'react';
import './dataTable.scss';

console.log('Loading the DataTable');

let DataTable = React.createClass({
    render: function() {
        return (
            <div id="data-table" className="data-table-l">Data Table
                <table></table>
            </div>
        );
    }
});

export default DataTable;
