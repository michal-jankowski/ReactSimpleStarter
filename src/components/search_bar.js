/**
 * Created by DELL on 2017-03-08.
 */

import React, { Component } from 'react';

class SearchBar extends Component {
    render () {
        return <input onChange={event => console.log(event.target.value)}/>;
    }
}

export default SearchBar;