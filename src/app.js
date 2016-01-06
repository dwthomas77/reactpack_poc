import React from 'react';
import ReactDOM from 'react-dom';
import 'app.scss';

// Load Components
import TitleBar from 'components/titleBar/titleBar.js';

// store React components in array for reuse
let componentList = [];
componentList['TitleBar'] = <TitleBar />;

// application namespaced functionality
var app = {};

// convenience method for adding React components to the DOM
app.renderComponent = function renderComponent (componentName, targetId) {
    ReactDOM.render(
        componentList[componentName],
        document.getElementById('title-bar')
    );
};

// Run the application
app.run = function run() {
    // Title Bar
    app.renderComponent('TitleBar', 'no');
};

// Run Time
app.run();
