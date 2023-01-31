import React from 'react'

import Image1 from '../photos/Furniture1.png'
import Image2 from '../photos/photo1.png'
import Image3 from '../photos/photo2.png'
import Image4 from '../photos/photo3.png'

class GalleryTop extends React.Component {
    render() {
        return (
            <div className={'gallery-top'}>
                <div className={'slider'}>
                    <div className={'slide'}>
                        <div>
                            <div className={'slider__grid'}>
                                <div className={'slider__item'}>
                                    <div className={'slider__item-wrapper'}>
                                        <span className={'slider__caption-green'}>TOP COLLECTIONS 2022</span>
                                        <h3 className={'slider__title'}>We Serve Your<br/>Dream <span
                                            className={'slider__title-underline'}>Furniture</span></h3>
                                        <span className={'slider__caption-black'}>Get 50% off all products</span>
                                        <a className={'slider__link'} href={'/'}>SHOP NOW</a>
                                    </div>
                                </div>
                                <div className={'slider__item'}>
                                    <div className={'slider__flex'}>
                                        <div className={'slider__image-wrapper'}>
                                            <img src={Image1}/>
                                        </div>

                                        <div>
                                            <ul className={'slide__links'}>
                                                <li className={'slide__links-item'}>
                                                    <a href={'/'} className={'slide__links-link'}>
                                                        <img src={Image2}/>
                                                        <span className={'slider__caption-green--sm'}>$<b>120</b></span>
                                                        <span
                                                            className={'slider__caption-black--sm'}>Office Desk Chair</span>
                                                    </a>
                                                </li>
                                                <li className={'slide__links-item'}>
                                                    <a href={'/'} className={'slide__links-link'}>
                                                        <img src={Image3}/>
                                                        <span className={'slider__caption-green--sm'}>$<b>180</b></span>
                                                        <span
                                                            className={'slider__caption-black--sm'}>Home Alisa Sofa</span>
                                                    </a>
                                                </li>
                                                <li className={'slide__links-item'}>
                                                    <a href={'/'} className={'slide__links-link'}>
                                                        <img src={Image4}/>
                                                        <span className={'slider__caption-green--sm'}>$<b>250</b></span>
                                                        <span
                                                            className={'slider__caption-black--sm'}>Modern Chair</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'slider__dots'}>
                    <span className={'slider__dot'}></span>
                    <span className={'slider__dot slider__dot--active'}></span>
                    <span className={'slider__dot'}></span>
                    <span className={'slider__dot'}></span>
                </div>
            </div>
        )
    }

}

export default GalleryTop;
