import React from 'react'

import Card1 from '../photos/Card1.jpeg'
import Card2 from '../photos/Card2.jpeg'
import Card3 from '../photos/Card3.jpeg'
import Card4 from '../photos/Card4.jpeg'

import Tag from '../image/tag.svg'

class Item extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={'blogs__item'}>
                <img src={this.props.img}/>
                <div className={'blogs__wrapper'}>
                    <div className={'blogs__tags_wrapper'}>
                        <div className={'blogs__tag'}><img src={Tag}/>{this.props.tag}</div>
                        <div className={'blogs__date'}>{this.props.date}</div>
                    </div>
                    <h3 className={'blogs__title'}>{this.props.title}</h3>
                    <a href={'/'} className={'blogs__link'}>Read more</a>
                </div>
            </div>
        )

    }
}

class Template extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section className={'section'}>
                <h2 className={'section__title'}>Our Latest Articles</h2>
                <div className={'section__grid section__grid--sm'}>
                    <Item img={Card1} tag={'Furniture'} date={'23 September 2022'} title={'Begineer guide buying minimal sofa'}/>
                    <Item img={Card2} tag={'TABLE'} date={'23 September 2022'} title={'Buying best minimal computer table'}/>
                    <Item img={Card3} tag={'Bench'} date={'23 march 2022'} title={'How to choose best modern bench'}/>
                    <Item img={Card4} tag={'Chair'} date={'23 September 2022'} title={'Best Summer Outfit\n' +
                        'Style in this Country'}/>
                </div>
            </section>
        )
    }

}

export default Template;
