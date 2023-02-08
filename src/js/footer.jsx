import React from 'react'
import LogoMini from '../image/logo-s.svg'

import Facebook from '../image/facebook.svg';
import Twitter from '../image/twitter.svg';
import Pinterest from '../image/pinterest.svg';
import Instagram from '../image/instagram.svg'

class Link extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className={'footer__item'}><a className={'footer__link'} href={'/'}>{this.props.title}</a></li>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className={'footer'}>
                <div className={'footer__top'}>
                    <div className={'container'}>
                        <div className={'footer__grid'}>
                            <div className={'footer__text_wrapper'}>
                                <img src={LogoMini}/>
                                <div className={'footer__text'}>
                                    Funking is the a popular Ecommerce site.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor
                                </div>
                                <ul className={'footer__social'}>
                                    <li className={'footer__social-item'}>
                                        <a href={'/'} className={'footer__social-link'}>
                                            <img src={Facebook}></img>
                                            Facebook</a>
                                    </li>
                                    <li className={'footer__social-item'}>
                                        <a href={'/'} className={'footer__social-link'}>
                                            <img src={Twitter}></img>Twitter</a>
                                    </li>
                                    <li className={'footer__social-item'}>
                                        <a href={'/'} className={'footer__social-link'}>
                                            <img src={Instagram}></img>
                                            Instagram</a>
                                    </li>
                                    <li className={'footer__social-item'}>
                                        <a href={'/'} className={'footer__social-link'}>
                                            <img src={Pinterest}></img>
                                            Pinterest</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className={'footer__list'}>
                                    <li className={'footer__item-bold'}>Help</li>
                                    <Link title={'Privacy Policy'}/>
                                    <Link title={'Shipping & Delivery'}/>
                                    <Link title={'Refund Policy'}/>
                                    <Link title={'Track Your Order'}/>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className={'footer__item-bold'}>Store</li>
                                    <Link title={'Furniture'}/>
                                    <Link title={'Tabble'}/>
                                    <Link title={'Sofa'}/>
                                    <Link title={'Other'}/>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className={'footer__item-bold'}>Supports</li>
                                    <Link title={'Feedbcak'}/>
                                    <Link title={'Contact us'}/>
                                    <Link title={'Download app'}/>
                                    <Link title={'Terms conditins'}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'footer__bottom'}>
                    <div className={'container'}>
                        <div className={'footer__grid--bottom'}>
                            <div>
                                © 2021 Funking - All rights reserved.
                            </div>
                            <div className={'footer__bottom_text'}>
                                <span>Privacy</span>
                                <span>Security</span>
                                <span>Terms</span>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }

}

export default Footer;
