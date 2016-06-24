/**
 * Created by Scott on 6/16/2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { People } from '../../imports/collections/people';
import PersonDetail from './person_detail';

const PER_PAGE = 20;

class PeopleList extends Component {
    componentWillMount() {
        this.page = 1;
    }

    handleButtonClick() {
        Meteor.subscribe('people', PER_PAGE * (this.page + 1));
        this.page += 1;
    }
    render() {
        //props.people is an array of person objects returned by the container
        //that can be used in this component

        return (
            <div>
                <div className="people-list">
                    {this.props.people.map(people =>
                        <PersonDetail key={people._id} people={people}/>
                    )}
                </div>
                <button onClick={this.handleButtonClick.bind(this)}
                        className="btn btn-primary">
                    Load More...
                </button>
            </div>
        );
    }
};

export default createContainer(() => {
    //Set up subscription
    Meteor.subscribe('people', PER_PAGE);

    //Return an object.  Whatever is returned will be sent to PeopleList
    //component as props.
    return { people: People.find({}).fetch() };
}, PeopleList);