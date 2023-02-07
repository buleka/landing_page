import React from 'react'
// import ReactDOM from 'ReactDOM';

import Avatar from '../photos/avatar.png'

import ArrowNext from '../image/arrow-big-next.svg'
import ArrowPrev from '../image/arrow-big-prev.svg'

class Testimonails extends React.Component {
    render() {
        return (
            <section className={'section'}>
                <div>
                    <h2 className={'section__title'}>What Our Customer Says</h2>
                    <div className={'testimonails'}>
                        <a href={'/'} className={'testimonails__button'}>Prev
                        <img src={ArrowPrev}/>
                        </a>
                        <div className={'testimonails__item'}>
                            <img className={'testimonails__image'} src={Avatar}/>
                            <div className={'testimonails__text_wrapper'}>
                                <div className={'testimonails__text'}>
                                    I like Furniking.com and as compared to other company it's polices and customers support
                                    is very good easy to reach., also many time they unable to delivered. The ultricies are
                                    pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisist amet.
                                </div>
                                <div className={'testimonails__title'}>Angelina Joly</div>
                                <div className={'testimonails__caption'}>Co-founder</div>
                            </div>
                        </div>
                        <a href={'/'} className={'testimonails__button'}>Next
                            <img src={ArrowNext}/>
                        </a>
                    </div>
                </div>
            </section>
        )
    }

}

export default Testimonails;
