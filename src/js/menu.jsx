import React from 'react';

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


class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={'menu'}>
                <ul className={'menu__list'}>
                    <Item name={'HOME'} href={'/'} activeState={' menu__item--active'}/>
                    <Item name={'SHOP'} href={'/'}/>
                    <Item name={'BLOG'} href={'/'}/>
                    <Item name={'ABOUT'} href={'/'}/>
                    <Item name={'CONTACT US'} href={'/'}/>
                </ul>
            </nav>
        )
    }
}

export default Menu;
