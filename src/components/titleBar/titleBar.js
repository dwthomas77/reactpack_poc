import React from 'react';
import './titleBar.scss';

console.log('Loading the TitleBar Component');

let TitleBar = React.createClass({
    render: function() {
        return (
            <div className="title-bar">
                Hello, world! I am a Title Bar.
            </div>
        );
    }
});

export default TitleBar;
