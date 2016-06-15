/**
 * Created by Scott on 6/14/2016.
 */
import { Meteor } from 'meteor/meteor';
import { People } from '../imports/collections/people';
import _ from 'lodash';
import { imaage, helpers } from 'faker';

Meteor.startup(() => {
    //This query will return a cursor
    const numberRecords = People.find({}).count();

    //Check to see if data exists in collection
    if (!numberRecords) {
        //Generate data
        _.times(5000, () => {
            const { name, email, phone } = helpers.createCard();

            People.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }

});