import { Meteor } from 'meteor/meteor';
import '../imports/api/messages.js';
import { Messages } from '../imports/api/messages.js';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('findMessages',()=>{
  return Messages.find();
})
/* Messages.allow({
  insert: function(userId, doc){
    return true;
  }
}) */
Meteor.methods({
  sendMessage: function (messageText) {
    /* add authentication here */

    Messages.insert({
      text: messageText,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }
});