import React from 'react'
import {TabItem} from './tabs.jsx'
import Feed from "./feed.jsx";

import ArrowNext from '../image/arrow-next.svg'
import ArrowPrev from  '../image/arrow-prev.svg'
import ArrowButton from '../image/bigarrow-next.svg'

class Section2 extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <section className={'section section--m'}>
                <h2 className={'section__title'}>OUR PRODUCTS</h2>
                <ul className={'tabs__list'}>
                    <TabItem title={'All Products'} externalClass={'tabs__item--active'}/>
                    <TabItem title={'Best Sellers'}/>
                    <TabItem title={'New Arrivals'}/>
                    <TabItem title={'Todays Deals'}/>
                </ul>
                <Feed dots={false}/>
                <div className={'feed-pagination'}>
                    <form>
                        <a href={'/'} className={'feed-pagination__button'}>Next page
                        <img src={ArrowButton}/></a>
                        <div className={'feed-pagination__wrapper'}>
                            <span className={'feed-pagination__caption'}>Page</span>
                            <input className={'feed-pagination__input'} type={'number'} value={'1'}/>
                            <span className={'feed-pagination__caption'}>of 100</span>
                            <a className={'feed-pagination__link feed-pagination__prev'}>Prev
                                <img src={ArrowPrev}/>
                            </a>
                            <a className={'feed-pagination__link feed-pagination__next'}>Next
                                <img src={ArrowNext}/>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        )
    }

}

export default Section2;
