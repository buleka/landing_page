import React from 'react'

import SearchLogo from '../image/search.svg'


class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className={'search__form'}>
                    <input type={'search'} className={'search'} placeholder={'Search here'}/>
                    <hr className={'search__sep'}/>
                    <select className={'search__select'}>
                        <option value="">Categories</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Coconut">Coconut</option>
                    </select>
                    <button className={'search__button'}>
                        <img src={SearchLogo}/>
                        Search
                    </button>
                </form>
            </div>)
    }
}

export default Search;
