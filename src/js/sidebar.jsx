import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <li className={'sidebar__item' + (this.props.activeState ? this.props.activeState : '')}>
                <a className={'sidebar__link'}
                   href={this.props.href}>{this.props.name}</a>
            </li>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className={'sidebar__list'}>
                        <Item name={'ALL COLLECTIONS'} activeState={' sidebar__item--active'}/>
                        <Item name={'All'} href={'/'} />
                        <Item name={'New Arrivals'} href={'/'}/>
                        <Item name={'Hot Sale'} href={'/'}/>
                        <Item name={'Furniture'} href={'/'}/>
                        <Item name={'Amrature'} href={'/'}/>
                        <Item name={'Tabble'} href={'/'}/>
                        <Item name={'Chair'} href={'/'}/>
                        <Item name={'Sofa'} href={'/'}/>
                        <Item name={'Mirrors'} href={'/'}/>
                        <Item name={'Stools'} href={'/'}/>
                        <Item name={'Benches'} href={'/'}/>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default Sidebar;
