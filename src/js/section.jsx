import React from 'react'

import Photo7 from '../photos/photo7.jpeg'
import Photo8 from '../photos/photo8.jpeg'

class Item extends React.Component {

    render() {
        return (
            <div className={'section__item'}>
                <img src={this.props.photo}/>
                <div className={'section__item-special'}>40% off</div>
                <div className={'section__item-wrapper'}>
                    <h4 className={'section__item__title'}>Living Room Furniture</h4>
                    <span className={'section__item__caption'}>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</span>
                    <div className={'section__item__grid'}>
                        <div>
                            <span className={'section__item__price section__item__price--green'}>$150</span>
                            <span className={'section__item__price'}>$250</span>
                        </div>
                        <a href={'/'} className={'section__item__link'}>SHOP NOW</a>
                    </div>
                    <div className={'timer'}>
                        <div className={'timer__item'}>
                            <span className={'timer__m'}>10</span>
                            <span className={'timer__s'}>Days</span>
                        </div>
                        <div className={'timer__item'}>
                            <span className={'timer__m'}>15</span>
                            <span className={'timer__s'}>HRS</span>
                        </div>
                        <div className={'timer__item'}>
                            <span className={'timer__m'}>30</span>
                            <span className={'timer__s'}>MIN</span>
                        </div>
                        <div className={'timer__item'}>
                            <span className={'timer__m'}>22</span>
                            <span className={'timer__s'}>secs</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class Section extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <section className={'section'}>
                <h2 className={'section__title'}>SPECIAL OFFER</h2>
                <div className={'section__grid'}>
                    <Item photo={Photo7}/>
                    <Item photo={Photo8}/>
                </div>
            </section>
        )
    }

}

export default Section;
