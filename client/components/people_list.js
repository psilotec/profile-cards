/**
 * Created by Scott on 6/16/2016.
 */
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { People } from '../../imports/collections/people';

const PeopleList = (props) => {
    //props.people is an array of employee objects returned by the container
    // that can be used in this component

  return (
      <div>
          <div className="people-list">
              People List
          </div>
      </div>
  );
};

export default createContainer(() => {
    //Set up subscription
    Meteor.subscribe('people');

    //Return an object.  Whatever is returned will be sent to PeopleList
    //component as props.
    return { people: People.find({}).fetch() };
}, PeopleList);