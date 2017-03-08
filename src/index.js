// /**
//  * Created by DELL on 2017-03-07.
//  */

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDvIIskVi78VY1G9erEBdwFy0IuSMxTA6I';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
        <SearchBar/>
    </div>
    );
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));