

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