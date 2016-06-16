/**
 * Created by Scott on 6/14/2016.
 */
import { Meteor } from 'meteor/meteor';
import { People } from '../imports/collections/people';
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
    //This query will return a cursor
    const numberRecords = People.find({}).count();

    //debug
    console.log(numberRecords);

    //Check to see if data exists in the People collection
    if (!numberRecords) {
        //Generate data and insert into the People collection
        _.times(5000, () => {
            const { name, email, phone } = helpers.createCard();

            People.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }

    //Publish People collection
    Meteor.publish('people', function() {
        //returns a cursor that the subscription can use to get the records it requests
       return People.find({}, { limit: 20 });
    });
});