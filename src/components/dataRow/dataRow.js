import React from 'react';
import './dataRow.scss';

console.log('Loading the DataRow');

let DataRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td className="data-row-l">{ this.props.name }</td>
            </tr>
        );
    }
});

export default DataRow;
