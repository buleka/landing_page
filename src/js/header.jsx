import React from 'react';
import Logo from '../image/logo.svg';
import Sidebar from './sidebar.jsx';
import Search from './search.jsx';

import Shop from '../image/shop.svg'
import NotificationLogo from '../image/Notification.svg'
import Avatar from '../image/avatar.svg'

import Menu from './menu.jsx'

class HeaderTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'header__wrapper'}>
                <div className={'container'}>
                    <div className={'header__top'}>
                        <div>Welcome to our online shop</div>
                        <div className={'top__right'}>
                            <div>
                                <select className={'top__select'}>
                                    <option value={'eng'}>English (USD)</option>
                                    <option value={'rus'}>Rus (RUB)</option>
                                </select>
                            </div>
                            <div className={'top__list-links'}><a className={'top__link'} href={'/'}>Login</a> or <a
                                className={'top__link'}
                                href={'/'}>Sign up</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={'header'}>
                <HeaderTop/>
                <div className={'container'}>
                    <div className={'header__middle grid'}>
                        <div className={'grid__item'}>
                            <div className={'logo'}>
                                <a className={'logo__link'} href={'/'}>Компания
                                    <img className={'logo__image'} src={Logo} alt={'Компания'}/>
                                </a>
                            </div>
                        </div>
                        <div className={'grid__item'}>
                            <Search/>
                        </div>
                        <div className={'grid__item grid__item--last'}>
                            <div className={'header__nav'}>
                                <a href={'/'} className={'header__nav-link'}>
                                    <img src={Shop}/>
                                </a>
                                <a href={'/'} className={'header__nav-link'}>
                                    <img src={NotificationLogo}/>
                                </a>
                                <a href={'/'} className={'header__nav-link'}>
                                    <img src={Avatar}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'header__bottom'}>
                    <div className={'container'}>
                        <div>
                            <div className={'grid'}>
                                <div className={'grid__item'}>
                                    <Sidebar/>
                                </div>
                                <div className={'grid__item'}>
                                    <Menu/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </header>
        )
    }
}

export default Header;
