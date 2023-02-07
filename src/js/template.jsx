import React from 'react'
// import ReactDOM from 'ReactDOM';

import Header from './header.jsx';
import GalleryTop from './galleryTop.jsx'
import ListLinks from './listLinks.jsx'
import Banners from './banners.jsx'
import Tabs from './tabs.jsx'
import Section from './section.jsx'
import Section2 from './section2.jsx'
import Testimonails from './testimonials.jsx'
import Blogs from './blogs.jsx';

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
                        <Tabs/>
                        <Section/>
                        <Section2/>
                        <Testimonails/>
                        <Blogs/>
                    </div>
                </main>
            </div>
        )
    }

}

export default Template;
