import React from 'react';
import './adminPanel.scss';

import DataTable from 'components/dataTable/dataTable';

console.log('Loading the AdminPanel');

let AdminPanel = React.createClass({
    render: function() {
        return (
            <div id="admin-panel" className="admin-panel-l">Admin Panel
                <DataTable />
                <section id="filter" className="filter-l"></section>
            </div>
        );
    }
});

export default AdminPanel;
