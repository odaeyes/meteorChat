import { Template } from 'meteor/templating';
import './body.html';
import './message.js';
import { Messages } from '../api/messages.js';

Template.body.helpers({
  messages() {
    Meteor.subscribe('findMessages');
    return Messages.find();
  },
});

Template.body.events({
  'submit .new-message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element

    const text = event.target.text.value;

    // Insert a message into the collection
    Meteor.call("sendMessage", text);
    

    // Clear form
    event.target.text.value = '';

    // scroll to last message
    $('.panel-body').scrollTop($('.media-list').height())
  },
});
