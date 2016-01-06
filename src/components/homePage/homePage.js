import React from 'react';
import './homePage.scss';

// Load Components
import TitleBar from 'components/titleBar/titleBar';
import AdminPanel from 'components/adminPanel/adminPanel';

console.log('Loading Home Page');

let HomePage = React.createClass({
    render: function() {
        return (
            <div id="home-page" className="home-page-l">
                <TitleBar />
                <AdminPanel />
            </div>
        );
    }
});

export default HomePage;
