import React from 'react';
import Logo from '../image/logo.svg';
import Sidebar from './sidebar.jsx';


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

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={'header'}>
                <div>
                    Welcome to our online shop

                    English (USD)

                    Login or Sign up

                </div>
                <div>
                    <div className={'logo'}>
                        <a className={'logo__link'} href={'/'}>Компания
                            <img className={'logo__image'} src={Logo} alt={'Компания'}/>
                        </a>
                    </div>
                    <div>
                        <input type={'search'}/>

                    </div>
                    <div>
                        <a href={'/'}></a>
                        <a href={'/'}></a>
                        <a href={'/'}></a>
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
