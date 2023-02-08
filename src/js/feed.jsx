import React, {Component} from 'react'
import Photo1 from '../photos/photoT1.jpeg'
import Star from '../image/star.svg'

import {ReactComponent as Compare}  from '../image/Compare.svg'
import {ReactComponent as Favourite} from '../image/Favourite.svg'
import {ReactComponent as ShopSm} from '../image/ShopSm.svg'
import {ReactComponent as View} from '../image/View.svg'
import Circle from '../image/circle.svg';
import CircleGreen from '../image/circleGreen.svg';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showBlock: false,
        }
    }

    render() {
        return (
            <div>
                <a href={'/'} className={'feed__item-link'}
                   onMouseEnter={() => {this.setState({showBlock:true})}}
                   onMouseLeave={() => {this.setState({showBlock: false})}}>
                    <div className={'feed__type' + (this.props.type === 'Sale' ? ' feed__type--green' : '')}>{this.props.type}</div>
                    <div className={'feed__image-wrapper'}>
                        <img className={'feed__image'} src={Photo1}/>
                        <div className={'feed__link-list-wrapper' + (this.state.showBlock ? '': ' hidden')}>
                            <ul className={'feed__link-list' }>
                                <li className={'feed__link-item'}>
                                    <a className={'feed__link-sm'} href={'/'}>
                                       <Favourite className={'feed__link_img'}/>
                                    </a>
                                </li>
                                <li className={'feed__link-item'}>
                                    <a className={'feed__link-sm'} href={'/'}>
                                        <ShopSm className={'feed__link_img'}/>
                                    </a>
                                </li>
                                <li className={'feed__link-item'}>
                                    <a className={'feed__link-sm'} href={'/'}>
                                        <Compare className={'feed__link_img'}/>
                                    </a>
                                </li>
                                <li className={'feed__link-item'}>
                                    <a className={'feed__link-sm'} href={'/'}>
                                        <View className={'feed__link_img'}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span className={'feed__caption-gray'}>{this.props.category}</span>
                    <span className={'feed__caption-black'}>Minimal LCD chair</span>
                    <div className={'feed__caption-wrapper'}>
                        <div><span className={'feed__caption feed__caption-green'}>$180</span>
                            <span className={'feed__caption feed__caption-lightGray'}>$250</span>
                        </div>
                        <div className={'feed__rating'}>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                        </div>
                    </div>

                </a>
            </div>
        )
    }

}

class Feed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={'feed-grid'}>
                    <Item type={'New'} category={'Chair'}/>
                    <Item type={'New'} category={'Chair'}/>
                    <Item type={'Sale'} category={'Chair'}/>
                    <Item type={'Sale'} category={'Chair'}/>
                    <Item type={'Sale'} category={'Chair'}/>
                    <Item type={'Sale'} category={'Chair'}/>
                    <Item type={'Sale'} category={'Chair'}/>
                    <Item type={'Sale'} category={'Chair'}/>
                </div>
                {this.props.dots ?
                    <div className={'dots-big'}>
                    <span className={'dots-big__item'}>
                        <img src={Circle}/>
                    </span>
                        <span className={'dots-big__item'}>
                         <img src={CircleGreen}/>
                    </span>
                    </div> : ''}

            </div>
        )
    }
}

export default Feed;
