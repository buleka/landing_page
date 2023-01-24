import React from 'react'
import logo from '../image/logo.svg';
import menu from '../image/ext-menu.svg';


// import ReactDOM from 'ReactDOM';

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
                <div className={'logo'}>
                    <a className={'logo__link'} href={'/'}>Компания
                        <img className={'logo__image'} src={logo} alt={'Компания'}/>
                    </a>
                </div>
                <nav className={'menu'}>
                    <ul className={'menu__list'}>
                        <Item name={'Главная'} href={'/'} activeState={' menu__link--active'}/>
                        <Item name={'SOFIT EVENT HOUSE'} href={'/'}/>
                        <Item name={'МЕРОПРИЯТИЯ'} href={'/'}/>
                        <Item name={'ТУРИСТАМ'} href={'/'}/>
                        <Item name={'КЕЙТЕРИНГ'} href={'/'}/>
                        <Item name={' ДЛЯ АГЕНТСТВ'} href={'/'}/>
                    </ul>
                </nav>
                <div>
                    <button className={'menu_button'}>
                        Меню
                        <img src={menu}/>
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;
