import React from 'react'

import Shipping from '../image/free-delivery 1.svg'
import Present from '../image/present.svg'
import Wallet from '../image/wallet.svg'
import Support from '../image/support.svg'


class Item extends React.Component {
    render() {
        return (
            <li className={'list-links__item'}>
                <img className={'list-links__img'} src={this.props.img}/>
                <div>
                    <span className={'list-links__title'}>{this.props.title}</span>
                    <span className={'list-links__caption'}>{this.props.caption}</span>
                </div>
            </li>
        )
    }
}

class ListLinks extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ul className={'list-links'}>
                    <Item title={'Free Shipping'} caption={'Orders over $100'} img={Shipping}/>
                    <Item title={'Smart Gift Card'} caption={'Buy $1000 to get card'} img={Present}/>
                    <Item title={'Quick Payment'} caption={'100% secure payment'} img={Wallet}/>
                    <Item title={'24/7 Support'} caption={'Quick support'} img={Support}/>
                </ul>
            </div>
        )
    }

}

export default ListLinks;
