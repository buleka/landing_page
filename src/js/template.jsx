import React from 'react'
// import ReactDOM from 'ReactDOM';

import Header from './header.jsx';
import GalleryTop from './galleryTop.jsx'
import ListLinks from './listLinks.jsx'

class Template extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className={'container'}>
                        <div className={'grid'}>
                            <div className={'grid__item'}></div>
                            <div className={'grid__item'}>
                                <GalleryTop/>
                            </div>
                        </div>
                        <ListLinks/>
                    </div>
                </main>
            </div>
        )
    }

}

export default Template;
