import React from 'react'

import Feed from "./feed.jsx";

export class TabItem extends  React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <li className={'tabs__item ' + (this.props.externalClass ? this.props.externalClass : '')}>{this.props.title}</li>
        )
    }
}


class TabList extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <ul className={'tabs__list'}>
                <TabItem title={'Top Products'} externalClass={'tabs__item--active'}/>
                <TabItem title={'New Arrivals'}/>
                <TabItem title={'Best Sellers'}/>
            </ul>
        )
    }
}

class Tabs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const types = [
            {
                type: 'New',
                class: ''
            },
            {
                type: 'New',
                class: ''
            },
            {
                type: 'Sale',
                class: 'green'
            },
            {
                type: 'Sale',
                class: 'green'
            },
            {
                type: 'Sale',
                class: 'green'
            },
            {
                type: 'Sale',
                class: 'green'
            },
            {
                type: 'New',
                class: ''
            },
            {
                type: 'New',
                class: ''
            }
        ]

        return (
            <section className={'tabs'}>
                <h2 className={'section__title'}>TRENDING</h2>
                <TabList/>
                <Feed dots={true} types={types}/>
            </section>
        )
    }

}

export default Tabs;
