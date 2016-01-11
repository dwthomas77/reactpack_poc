import React from 'react';
import './dataTable.scss';

import DataRow from 'components/dataRow/dataRow';

console.log('Loading the DataTable');

let DataTable = React.createClass({
    render: function() {
        return (
            <div id="data-table" className="data-table-l">Data Table
                <table>
                    <tbody>
                        <DataRow name="Sample Name" />
                    </tbody>
                </table>
            </div>
        );
    }
});

export default DataTable;
