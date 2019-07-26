import { Meteor } from 'meteor/meteor';
import '../imports/api/messages.js';
import { Messages } from '../imports/api/messages.js';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('findMessages',()=>{
  return Messages.find();
})