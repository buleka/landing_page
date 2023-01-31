import React from 'react'
import parse from 'html-react-parser';

import Photo4 from '../photos/photo4.png'
import Photo5 from '../photos/photo5.png'
import Photo6 from '../photos/photo6.png'

import Arrow from '../image/arrow-right.svg'

class Item extends React.Component{

    constructor() {
        super();
        const parse = require('html-react-parser');
    }

    render(){
        return(
            <div>
                <img className={'banners__grid__image'} src={this.props.img}/>
                <div className={ this.props.externalClass ? this.props.externalClass + ' banners__text' : 'banners__text'}>
                    <h3 className={'banners__title'}>{this.props.title}</h3>
                    <span className={'banners__caption'}>{parse(this.props.caption)}</span>
                    <a className={'banners__link'} href={'/'}>Read more
                        <img src={Arrow} className={'banners__link-icon'}/>
                    </a>
                </div>
            </div>
        )
    }
}

class Banners extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'banners'}>
                <div className={'banners__grid'}>
                    <div className={'banners__grid__item banners__grid__item--l'}>
                        <Item img={Photo4} title={'Modern Furniture Collections'} caption={'Starting from <b>$500</b>'}/>
                    </div>
                    <div className={'banners__grid__item'}>
                        <Item img={Photo5} title={'Geometric Bookcase'} caption={'Up to 20% discount'} externalClass={'banners__text--s'}/>
                    </div>
                    <div className={'banners__grid__item'}>
                        <Item img={Photo6} title={'Minimal Sofa collections'} caption={'Sale upto 40% discount'} externalClass={'banners__text--sl'}/>
                    </div>
                </div>
            </div>
        )
    }

    a
}

export default Banners
