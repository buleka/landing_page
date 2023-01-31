import React from 'react'
// import ReactDOM from 'ReactDOM';

import Header from './header.jsx';
import GalleryTop from './galleryTop.jsx'
import ListLinks from './listLinks.jsx'
import Banners from './banners.jsx'

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
                        <Banners/>
                    </div>
                </main>
            </div>
        )
    }

}

export default Template;
