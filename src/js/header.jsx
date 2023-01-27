import React from 'react';
import Logo from '../image/logo.svg';
import Sidebar from './sidebar.jsx';

import Search from './search.jsx';

class Item extends React.Component {
    render() {
        return (
            <li className={'menu__item'}>
                <a className={'menu__link' + (this.props.activeState ? this.props.activeState : '')}
                   href={this.props.href}>{this.props.name}</a>
            </li>

        )
    }
}

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
                    <div className={'header__middle'}>
                        <div className={'logo'}>
                            <a className={'logo__link'} href={'/'}>Компания
                                <img className={'logo__image'} src={Logo} alt={'Компания'}/>
                            </a>
                        </div>
                       <Search/>
                        <div>
                            <a href={'/'}></a>
                            <a href={'/'}></a>
                            <a href={'/'}></a>
                        </div>
                    </div>
                </div>


                <nav className={'menu'}>
                    <ul className={'menu__list'}>
                        <Item name={'HOME'} href={'/'} activeState={' menu__link--active'}/>
                        <Item name={'SHOP'} href={'/'}/>
                        <Item name={'BLOG'} href={'/'}/>
                        <Item name={'ABOUT'} href={'/'}/>
                        <Item name={'CONTACT US'} href={'/'}/>
                    </ul>
                </nav>

                <div>
                    <Sidebar/>
                </div>
            </header>
    )
    }
    }

    export default Header;
