/**
 * Created by Scott on 6/14/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import PeopleList from './components/people_list';

const App = () => {
    return (
        <div>
            <PeopleList />
        </div>
    );
;}

//After Meteor loads in the browser, render app to the DOM
Meteor.startup(() => {
    //React render call
    ReactDOM.render(<App />, document.querySelector('.container'));
});