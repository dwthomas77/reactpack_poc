import React from 'react';
import './titleBar.scss';

console.log('Loading the TitleBar');

let TitleBar = React.createClass({
    render: function() {
        return (
            <div id="title-bar" className="title-bar-l">
                <span className="title-bar-heading">Object Admin Panel - React and Webpack</span>
            </div>
        );
    }
});

export default TitleBar;
