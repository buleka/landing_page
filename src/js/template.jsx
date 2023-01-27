import React from 'react'
// import ReactDOM from 'ReactDOM';

import Header from './header.jsx';


class Template extends React.Component {
    render() {
        return (
            <div>
                <div className={'container'}>
                    <Header/>
                </div>
                <main>
                </main>
            </div>
        )
    }

}

export default Template;
