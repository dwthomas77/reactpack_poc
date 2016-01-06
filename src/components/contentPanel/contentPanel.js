import React from 'react';
import './contentPanel.scss';

console.log('Loading the ContentPanel Component');

let ContentPanel = React.createClass({
    render: function() {
        return (
            <!-- Data Table -->
            <section id="data-table" class="data-table-l"></section>
            <!-- Filter -->
            <section id="filter" class="filter-l"></section>
        );
    }
});

export default ContentPanel;
